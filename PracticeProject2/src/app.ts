console.log("===== Practice Project 2 =====");
import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.querySelector("input")! as HTMLInputElement;
const GOOGLE_API_KEY = "AIzaSyCIaAc2c5M3VpbCH6PPq_quwy9lHuowXOs";

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  console.log(enteredAddress);
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${GOOGLE_API_KEY}`);
}

form.addEventListener("submit", searchAddressHandler);
