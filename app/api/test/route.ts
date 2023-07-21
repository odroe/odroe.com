// Fack IP: 8.8.8.8

import { NextRequest, NextResponse } from 'next/server';

const createCashier =
  'https://www.kuaishoupay.com/rest/wd/pay/kscoin/deposit/kspay/cashier?kpn=KUAISHOU';

const createOrder =
  'https://www.kuaishoupay.com/pay/order/h5/trade/create_pay_order';

const cookie =
  '_did=web_5841840632E42430; did=web_364adf06bfeb89f51307e96766b3e654; didv=1688390355735; Hm_lvt_86a27b7db2c5c0ae37fee4a8a35033ee=1688114353,1689590403; login_method=3; userId=1974312666; kuaishou.recharge.web_st=ChhrdWFpc2hvdS5yZWNoYXJnZS53ZWIuc3QSsAEoa5270JoIkRiZXcssRTtaRpZAgQr9Ng58AJ4B8ANaFNGr2MX9wFPnZSmDeP5QyiqfpdBHW3fuGCHVKu3TUon5Zg6-3aTsUfH6_IiYNmYiRCNEI8UVwjKNfxyCOZPvq9nwIlNUlMB4nvDU0j4RvGsTDhXi1hRQ14xduy5vg41ShVKWqfrHpYqk7_DdWaw9z0uxgbk94F5uI2pYEJzyY9pZwquuC-cT4XCasi563ueS5xoS-ullcUS5CTCWKBqr1e_-KKXOIiCB0hrsbC9jnSArTB19gwo1btQDXsPq4ivif0-Lon3qZSgFMAE; kuaishou.recharge.web_ph=f56c42867825c397c9eb64003980879851eb; userIdFromPhone=1974312666';

const ip = '8.8.8.8';
const headers = {
  cookie,
  'x-forwarded-for': ip,
  'x-real-ip': ip,
  host: 'www.kuaishoupay.com',
};

export const runtime = 'nodejs';
export const POST = async (request: NextRequest) => {
  const cashier = fetch(createCashier, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      source: 'IOS_H5_NORMAL',
      ksCoin: 10,
      fen: 100,
      customize: true,
      kspayProvider: 'ALIPAY',
      kspayProviderChannelType: 'NORMAL',
    }),
  });

  const cashierRes = await cashier.then((res) => res.json());
  return NextResponse.json(cashierRes);

  const order = fetch(createOrder, {
    method: 'POST',
    headers,
    body: [
      'provider=ALIPAT',
      `merchant_id=${cashierRes.merchantId}`,
      `out_order_no=${cashierRes.ksOrderId}`,
      'pay_amount=100',
    ].join('&'),
  });

  const res = await order.then((res) => res.text());

  return new NextResponse(decodeURIComponent(decodeURIComponent(res)));
};
