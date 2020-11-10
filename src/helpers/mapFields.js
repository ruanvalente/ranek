export function mapFields (options) {
  const object = {}

  for (let value = 0; value < options.fields.length; value++) {
    const field = [options.fields[value]]

    object[field] = {
      get () {
        return this.$store.state[options.base][field]
      },
      set (valueMap) {
        this.$store.commit(options.mutation, { [field]: valueMap })
      }
    }
  }
  return object
}
