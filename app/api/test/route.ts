import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export const POST = async () => {
  const ip = '8.8.8.8';

  const cashier = await fetch(
    'https://pay.ssl.kuaishou.com/payAPI/k/pay/kscoin/deposit/nlogin/kspay/cashier',
    {
      method: 'POST',
      body: JSON.stringify({
        ksCoin: 30,
        fen: 300,
        userId: '1746384',
        customize: false,
        kpn: 'KUAISHOU',
        kpf: 'PC_WEB',
      }),
      headers: {
        'Content-Type': 'application/json',
        host: 'pay.ssl.kuaishou.com',
        referer: 'https://www.kuaishoupay.com',
        'x-forwarded-for': ip,
      },
    },
  );
  const order = await cashier.json();

  const result = [];
  result.push(order);

  const form = new URLSearchParams();
  form.append('provider', 'ALIPAY');
  form.append('merchant_id', order.merchantId);
  form.append('out_order_no', order.outOrderNo);
  form.append('pay_amount', '300');

  const info = await fetch(
    'https://www.kuaishoupay.com/pay/order/h5/trade/create_pay_order',
    {
      method: 'POST',
      body: form.toString(),
      headers: {
        host: 'www.kuaishoupay.com',
        referer: 'https://www.kuaishoupay.com',
        'x-forwarded-for': ip,
        'content-type': 'application/x-www-form-urlencoded',
      },
    },
  );

  const payment = await info.json();
  result.push(payment);

  return new NextResponse(
    decodeURIComponent(
      decodeURIComponent(payment.gateway_pay_param.provider_config),
    ),
  );

  // const search = new URLSearchParams(payment.gateway_pay_param.provider_config);
  // const alipayUrl = new URL(
  //   'https://openapi.alipay.com/gateway.do?charset=utf-8',
  // );
  // search.forEach((value, key) => alipayUrl.searchParams.append(key, value));

  // const alipay = await fetch(alipayUrl, {
  //   method: 'get',
  //   headers: {
  //     referer: 'https://www.kuaishoupay.com',
  //   },
  //   redirect: 'manual',
  // });

  // result.push(alipay.headers.get('location'));

  // return NextResponse.json(result);
};
