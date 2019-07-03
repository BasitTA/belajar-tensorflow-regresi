import 'bootstrap/dist/css/bootstrap.css';
import * as tf from '@tensorflow/tfjs';

//=========//
//DESKRIPSI//
//=========//
//Ini merupakan program mesin learning sederhana (regresi linier) menggunakan tensorflow 


//mendefinisikan model mesin learning untuk regresi linier
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

//menspesifikasi loss/kerugian dan optimizer/pengoptimal dari model
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

//deklarasi variabel buat training data
const xs = tf.tensor2d([-1,0,1,2,3,4],[6,1]);
const ys = tf.tensor2d([-3,-1,1,3,5,7],[6,1]);

//training model dan mengaktivasi tombol prediksi
model.fit(xs, ys, {epochs:500}).then(function(){
    document.getElementById('tombolPrediksi').disabled=false;
    document.getElementById('tombolPrediksi').innerText="Prediksi";
});

document.getElementById('tombolPrediksi').addEventListener('click',function(){
    let nilai=parseInt(document.getElementById('nilaiInput').value);
    document.getElementById('hasil').innerText=model.predict(tf.tensor2d([nilai], [1,1]));
})


//SUMBER : https://medium.com/codingthesmartway-com-blog/tensorflow-js-crash-course-machine-learning-for-the-web-getting-started-50694a575238