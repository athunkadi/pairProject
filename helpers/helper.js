class Helper {
  static toRupiahs(price) {
    let rupiah = new Intl.NumberFormat("ID").format(price);
    let output = `Rp ${rupiah}`;
    return output;
  }
}
module.exports = Helper;
