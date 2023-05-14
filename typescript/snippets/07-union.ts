interface Cash {
  type: 'cash',
  commission: number,
  currency: string,
}

interface Card {
  type: 'card',
  commission: number,
  currency: string,
  rejected: boolean;
}

type SinglePayment = Cash | Card;

declare let payment: SinglePayment;

// payment.rejected // ❌ nie mamy dostępu ponieważ nie wiemy czy płatność jest kartą czy gotówką

switch(payment.type) {
  case 'card':
    payment.rejected // Tutaj mamy już dostęp ponieważ TypeScript ma pewność, że płatność jest gotówką
    break;
}