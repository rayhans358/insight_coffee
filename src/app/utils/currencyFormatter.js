export function totalItemCart(items) {
  return items.reduce((acc, curr) => acc + curr.qty, 0)
};

export function sumPrice(items) {
  return items.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
};

export function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  })
    .format(number)
};