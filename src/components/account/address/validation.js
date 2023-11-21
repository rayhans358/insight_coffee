const rules = {
  address: {
    required: { value: true, message: 'Field alamat harus diisi' },
    minlength: { value: 5, message: 'Field alamat minimal 5 karakter' },
    maxlength: { value: 500, message: 'Field alamat maksimal 500 karakter' }
  },
  provinsi: {
    required: { value: true, message: 'Field provinsi tidak boleh kosong'}
  },
  kabupaten: {
    required: { value: true, message: 'Field kabupaten tidak boleh kosong'}
  },
  kecamatan: {
    required: { value: true, message: 'Field kecamatan tidak boleh kosong'}
  },
  kelurahan: {
    required: { value: true, message: 'Field kelurahan tidak boleh kosong'}
  },
  detail: {
    required: { value: true, message: 'Field detail alamat tidak boleh kosong'},
    maxlength: { value: 2000, message: 'Field deatil alamat maksimal 2000 karakter'}
  }
};

module.exports = rules;