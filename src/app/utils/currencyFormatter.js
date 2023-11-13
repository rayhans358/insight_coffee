export function totalItemCart(items) {
  return items.reduce((acc, curr) => acc + curr.qty, 0)
};

export function sumPrice(items) {
  return items.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
};

export function formatRupiah(number) {
  return new Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'IDR'
  })
    .format(number)
    .replace(/[IDR]/gi, '')
    .replace(/(\.+\d{2})/, '')
    .trimStart()
};