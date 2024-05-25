import { defineNuxtPlugin } from "#app";
import emailjs from "@emailjs/browser";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("emailjs", emailjs);
});
