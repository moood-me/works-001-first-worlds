# 2026-10-29 — Belarusian (`be`)

Why: Павел: ещё язык — белорусский.

- All 46 small worlds in `worlds/`: `"be"` in `languages`, each world's `lang/be.json` and every scene's `lang/be.json` (860 texts). The same text in several scenes (the logbook's entries, the notebook of «Рэчы сумленныя») is translated once and the same everywhere.
- Choices: a female «ты» where the Russian has one («Смерць у парку», «Рэчы сумленныя»); the logbook's cat Wick is «Кнот», the ship «Крэчат»; the scenes' signs in capitals as signs, «Ваш нумар» on the queue's board, «твой нумар» where the scene speaks to the player.

How it was checked: moood's `check` (its `be` branch: `be` in `i18n/languages.json`), `node packages/check/cli.js <repo> --write`
laid the files out, the translations were written into them, then `check` on the whole repository says «all right».
Modern standard Belarusian, the official orthography; translated from the English source, the Russian read beside it as
a second view of meaning and tone. Only translations and the `languages` lists were added; no source text, code or doc
was changed.
