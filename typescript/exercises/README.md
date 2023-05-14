# TypeScript wprowadzenie
TypeScript rozszerza JavaScript o możliwość typowania. Dzięki czemu jesteśmy w stanie wyłapać więcej błędów zanim oprogramowanie trafi na produkcję.

### Co nam daje typescript
1. Ułatwia kontrolę nad aplikacją
1. Większa czytelność kodu
1. Wymusza mniejsze funkcje
1. Podpowiedzi w edytorze kodu
1. Sprawdza poprawność typów podczas kompilacji
1. Każdy kod JS jest prawidłowym kodem TS
1. TS finalnie jest kompilowany do JS

### Jakie narzuca utrudnienia
1. Zwalnia czas wydawania oprogramowania
1. Dodatkowa konfiguracja przy starcie projektu

### Konfiguracja środowiska
Instalacja
```
npm i -D typescript
```

Komenda do uruchomienia
```
./node_modules/.bin/tsc index.ts
lub npx tsc index.ts
```

Aby uruchomienie w trybie obserwacji dodajemy flagę
```
--watch
```

## Przydatne linki
[Dokumentacja TS](https://www.typescriptlang.org/docs/)

[Ćwiczenia z TS](https://typescript-exercises.github.io/)

[Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

[Playground](https://www.typescriptlang.org/play)

[Types Or Interfaces](https://github.com/typescript-cheatsheets/react#types-or-interfaces)

[Migracja z JS na TS](https://medium.com/opensanca/migrating-from-js-to-ts-cra-b5f679086c5a)