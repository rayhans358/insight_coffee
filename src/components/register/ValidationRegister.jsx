const rules = {
  full_name: {
    required: 'Nama lengkap harus diisi',
    maxlength: { value: 300, message: 'Field nama lengkap maksimal 300 karakter' },
  },

  email: {
    required: { value: true, message: 'Field Email tidak boleh kosong!' },
    minlength: { value: 3, message: 'Field Email minimal 3 karakter' },
    mexlength: { value: 300, message: 'Field Email maksimal 300 karakter' },
    pattern: {
      value : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Email tidak valid!'
    }
  },

  password: {
    required: { value: true, message: 'Field Password tidak boleh kosong!' },
    minlength: { value: 5, message: 'Field Password minimal 5 karakter' },
    maxlength: { value: 300, message: 'Field Password maksimal 300 karakter' }
  },

  passwordConfirm: {
    required: { value: true, message: 'Field tidak boleh kosong'}
  }
};

module.exports = rules;