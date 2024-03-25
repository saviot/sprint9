export default class UserInfo {
  constructor() {
    this.nameElement = document.querySelector('.profile__name');
    this.titleElement = document.querySelector('.profile__title');
  }

  getUserInfo() {
    return {
      nama: this.nameElement.textContent,
      title: this.titleElement.textContent,
    };
  }

  setUserInfo(formData) {
    this.nameElement.textContent = formData.nama;
    this.titleElement.textContent = formData.title;
  }
}
