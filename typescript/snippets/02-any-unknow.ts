let anything: any = 'test';

// Kompilator przestaje nas informować o błędzie taki zapis wygeneruje błąd w już działającej aplikacji
anything.add();

interface Kurczak {
  krajPochodzenia: 'PL' | 'DE',
  cena: number,
  farma: string,
}

interface KurczakZWolnegoWybiegu extends Kurczak {
  krajPochodzenia: 'PL',
  farma: 'WolnaKurka'
}

let kurczakZBiedronki: unknown = {
  krajPochodzenia: 'PL',
  cena: 20,
  farma: 'WolnaKurka'
}

function kurczakZWolnegoWybiegu(kurczak: any): kurczak is KurczakZWolnegoWybiegu {
  return kurczak.krajPochodzenia === 'PL' && kurczak.farma === 'WolnaKurka';
}

function kupKurczaka(): void {
  // const kurczak = kurczakZBiedronki; //  ❌ nie mamy dostępu do żadnego pola ponieważ typ jest unknown
 if (kurczakZWolnegoWybiegu(kurczakZBiedronki)) {
   const kurczak = kurczakZBiedronki; // ✅ Tutaj mamy już dostęp do pól z typu "KurczakZWolnegoWybiegu"
 }
}