const runPreloader = () => {
  function loadData() {
    setTimeout(() => {
      let preloaderEl = document.querySelector('.loader-wrapper');
      preloaderEl.classList.add('loader-hide');
    }, 2000);
  }
  loadData();
};
export default runPreloader();
