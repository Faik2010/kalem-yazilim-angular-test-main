export const USERS = {
  1: {
    id: 1,
    username: 'admin',
    password: 'admin',
    name: 'Mert',
    surname: 'Yildiz',
    mobile: '05350056910',
  },
};

export const ITEMS: any = {
  1: {
    id: 1,
    title: 'Nike Air Max 270',
    description:
      'Nike Air Max 270, her adımın altında taze tarz ve görünür yastıklama sunar. Modern konfor için güncellenen ayakkabı, abartılmış dil üstü ve miras dil logosuyla orijinal, 1991 Air Max 180 e gönderme yapar.',
    price: 1199.99,
    image: 'https://i.ibb.co/m6Cwjn6/1.jpg',
  },
  2: {
    id: 2,
    title: 'Adidas Ultraboost',
    description:
      'Adidas Ultraboost, her koşuda performans ve tarzı bir arada sunar. Enerji dönüşüm teknolojisi sayesinde yürüyüşü daha hafif ve zevkli hale getirir. Rahat ve esnek tasarımı sayesinde ayaklarınıza mükemmel bir uyum sağlar.',
    price: 1099.99,
    image: 'https://i.ibb.co/zG3Xx6V/2.jpg',
  },
  3: {
    id: 3,
    title: 'Puma RS-X',
    description:
      'Puma RS-X, retro görünümü ve modern teknolojisiyle öne çıkar. Ayakkabının üst kısmı, dayanıklı malzemelerden yapılmıştır ve ayağınızı rahat ve güvende tutar. Yastıklama sistemi sayesinde yürüyüşü daha konforlu hale getirir.',
    price: 899.99,
    image: 'https://i.ibb.co/WknTrcK/3.jpg',
  },
  4: {
    id: 4,
    title: 'New Balance 990v5',
    description:
      'New Balance 990v5, kaliteli malzemeleri ve zarif tasarımıyla fark yaratır. Ayakkabının orta tabanı, zıplama ve yastıklama özellikleri sayesinde performansı artırır. Ayrıca, ayakkabının üst kısmı nefes alabilen malzemelerden yapılmıştır ve ayakları serin tutar.',
    price: 999.99,
    image: 'https://i.ibb.co/4ttzHb5/4.jpg',
  },
  5: {
    id: 5,
    title: 'Asics Gel-Kayano 28',
    description:
      'Asics Gel-Kayano 28, her koşucunun ihtiyacını karşılar. Yenilikçi teknolojileri sayesinde yürüyüşü daha hafif ve konforlu hale getirir. Ayakkabının üst kısmı, nefes alabilen malzemelerden yapılmıştır ve ayakları serin tutar.',
    price: 1199.99,
    image: 'https://i.ibb.co/VM3yDxr/5.jpg',
  },
};

export const INVOICES = [
  {
    module_type: 'BILLING',
    company_id: 1,
    company: {
      description: 'KALEM Parfüm',
      number: 1,
      has_material: false,
      has_current_account: false,
      has_service_card: false,
      has_cash_account: false,
      has_bank_card: false,
      has_customer: false,
      id: 1,
    },
    working_period_id: 1,
    working_period: {
      description: '2023 Çalışma Dönemi',
      number: '1',
      id: 1,
    },
    document_type: 'SALES_RETAIL_DISPATCH',
    guid: 'EE5BFBB1-2633-4A3D-A327-8B74643A1431',
    document_num: '0000000000000002',
    document_date: 1695329999000,
    branch_id: 1,
    branch: {
      description: 'MERKEZ',
      number: '000',
      number_description: '000 - MERKEZ',
      id: 1,
    },
    current_account_id: 1,
    current_account: {
      code: '0000001',
      description: 'PERAKENDE',
      id: 1,
    },
    warehouse_id: 1,
    warehouse: {
      description: 'Merkez',
      number: '001',
      code_description: '001 - Merkez',
      id: 1,
    },
    currency_id: 159,
    currency: {
      code: 'TRY',
      description: 'Türk Lirası',
      currency_exchange_rates: [],
      id: 159,
    },
    exchange_rate: 1.0,
    special_code: '1',
    expense_amount: 0.0,
    discount_amount: 0.0,
    vat_amount: 2371.67,
    without_vat_amount: 11858.33,
    net_total_amount: 14230.0,
    gross_total_amount: 14230.0,
    erp_transferred: 'NO',
    document_status: 'REAL',
    cancelled: 'NO',
    invoiced: 'INVOICED',
    edispatch: 'PAPER_DISPATCH',
    edispatch_scenario: 'BASE_DISPATCH',
    einvoice: 'PAPER_INVOICE',
    id: 6,
  },
  {
    module_type: 'BILLING',
    company_id: 1,
    company: {
      description: 'KALEM Parfüm',
      number: 1,
      has_material: false,
      has_current_account: false,
      has_service_card: false,
      has_cash_account: false,
      has_bank_card: false,
      has_customer: false,
      id: 1,
    },
    working_period_id: 1,
    working_period: {
      description: '2023 Çalışma Dönemi',
      number: '1',
      id: 1,
    },
    document_type: 'SALES_RETAIL_DISPATCH',
    guid: 'EE5BFBB1-2633-4A3D-A327-8B74643A1431',
    document_num: '0000000000000002',
    document_date: 1695329999000,
    branch_id: 1,
    branch: {
      description: 'MERKEZ',
      number: '000',
      number_description: '000 - MERKEZ',
      id: 1,
    },
    current_account_id: 1,
    current_account: {
      code: '0000001',
      description: 'PERAKENDE',
      id: 1,
    },
    warehouse_id: 1,
    warehouse: {
      description: 'Merkez',
      number: '001',
      code_description: '001 - Merkez',
      id: 1,
    },
    currency_id: 159,
    currency: {
      code: 'TRY',
      description: 'Türk Lirası',
      currency_exchange_rates: [],
      id: 159,
    },
    exchange_rate: 1.0,
    special_code: '1',
    expense_amount: 0.0,
    discount_amount: 0.0,
    vat_amount: 2371.67,
    without_vat_amount: 11858.33,
    net_total_amount: 14230.0,
    gross_total_amount: 14230.0,
    erp_transferred: 'NO',
    document_status: 'REAL',
    cancelled: 'NO',
    invoiced: 'PENDING',
    edispatch: 'PAPER_DISPATCH',
    edispatch_scenario: 'BASE_DISPATCH',
    einvoice: 'PAPER_INVOICE',
    id: 67,
  },
  {
    module_type: 'BILLING',
    company_id: 1,
    company: {
      description: 'KALEM Parfüm',
      number: 1,
      has_material: false,
      has_current_account: false,
      has_service_card: false,
      has_cash_account: false,
      has_bank_card: false,
      has_customer: false,
      id: 1,
    },
    working_period_id: 1,
    working_period: {
      description: '2023 Çalışma Dönemi',
      number: '1',
      id: 1,
    },
    document_type: 'SALES_RETAIL_DISPATCH',
    guid: 'EE5BFBB1-2633-4A3D-A327-8B74643A1431',
    document_num: '0000000000000002',
    document_date: 1695329999000,
    branch_id: 1,
    branch: {
      description: 'MERKEZ',
      number: '000',
      number_description: '000 - MERKEZ',
      id: 1,
    },
    current_account_id: 1,
    current_account: {
      code: '0000001',
      description: 'PERAKENDE',
      id: 1,
    },
    warehouse_id: 1,
    warehouse: {
      description: 'Merkez',
      number: '001',
      code_description: '001 - Merkez',
      id: 1,
    },
    currency_id: 159,
    currency: {
      code: 'TRY',
      description: 'Türk Lirası',
      currency_exchange_rates: [],
      id: 159,
    },
    exchange_rate: 1.0,
    special_code: '1',
    expense_amount: 0.0,
    discount_amount: 0.0,
    vat_amount: 2371.67,
    without_vat_amount: 11858.33,
    net_total_amount: 14230.0,
    gross_total_amount: 14230.0,
    erp_transferred: 'NO',
    document_status: 'REAL',
    cancelled: 'NO',
    invoiced: 'INVOICED',
    edispatch: 'PAPER_DISPATCH',
    edispatch_scenario: 'BASE_DISPATCH',
    einvoice: 'PAPER_INVOICE',
    id: 55,
  },
];

export function findItemById(itemId: number) {
  return ITEMS[itemId];
}

export function authenticate(username: string, password: string) {
  const user: any = Object.values(USERS).find(
    (user) => user.username === username
  );
  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }
}
