import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'modern-normalize/modern-normalize.css';
import imageUrl from '../img/alert-icon.svg';
import resolveImageUrl from '../img/resolve-icon.svg';
// createPromise(delay, state) { return new Promise((resolve, reject) => {
//      if (state === 'fulfilled') { setTimeout(() => { resolve(delay); }, delay); } else {
//         setTimeout(() => {
//             reject(delay); }, delay); } }); }
//  document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const delay = parseInt(document.querySelector('input[name="delay"]').value);
//     const state = document.querySelector('input[name="state"]:checked').value;
//     createPromise(delay, state).then((delay) => {
//         iziToast.success({
//             title: 'Success', message: `Fulfilled promise in ${delay}ms` });
//         }) .catch((delay) => {
//             iziToast.error({
//         title: 'Error', message: `Rejected promise in ${delay}ms`
//     }); }); });
const inputForm = document.querySelector('.form');
inputForm.addEventListener('submit', promiseGenerator);

function promiseGenerator(e) {
  e.preventDefault();

  const delay = e.target.delay.value;
  const status = e.target.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
        messageSize: '16',
        messageColor: '#fff',
        backgroundColor: '#59a10d',
        position: 'topRight',
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        progressBar: true,
        progressBarColor: '#326101',
        iconColor: '#fff',
        iconUrl: resolveImageUrl,
        theme: 'dark',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        messageSize: '16',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        position: 'topRight',
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        progressBar: true,
        progressBarColor: '#ffbebe',
        iconUrl: imageUrl,
        theme: 'dark',
      });
    });

  console.log(promise);
}
