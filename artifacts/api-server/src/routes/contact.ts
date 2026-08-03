import { Router, type IRouter } from "express";
import { db, contactsTable, subscribersTable } from "@workspace/db";
import { SubmitContactBody, SubscribeNewsletterBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, message } = parsed.data;

  await db.insert(contactsTable).values({ name, email, message });

  req.log.info({ email }, "Contact form submitted");
  res.status(201).json({ ok: true });
});

router.post("/newsletter", async (req, res): Promise<void> => {
  const parsed = SubscribeNewsletterBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { email } = parsed.data;

  try {
    await db.insert(subscribersTable).values({ email });
    req.log.info({ email }, "Newsletter subscription added");
    res.status(201).json({ ok: true });
  } catch (err: unknown) {
    // Drizzle wraps pg errors; check message and nested cause for unique violation (23505)
    const isUniqueViolation = (e: unknown): boolean => {
      if (!e || typeof e !== "object") return false;
      const asAny = e as Record<string, unknown>;
      if (asAny["code"] === "23505") return true;
      if (typeof asAny["message"] === "string" && asAny["message"].includes("23505")) return true;
      if (asAny["cause"]) return isUniqueViolation(asAny["cause"]);
      return false;
    };
    if (isUniqueViolation(err)) {
      res.status(409).json({ error: "Este correo ya está suscrito." });
      return;
    }
    throw err;
  }
});

export default router;
