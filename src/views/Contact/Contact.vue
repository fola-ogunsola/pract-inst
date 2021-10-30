<template>
  <div>
    <page-header>Contact Us</page-header>
    <div class="contact container">
      <h2 class="heading">Got questions?</h2>
      <div class="contact-details">
        <div class="contact-details-item">
          <h4 class="title">Telephone</h4>
          <p class="phone">+234 [0] 000 000 0000</p>
        </div>
        <div class="contact-details-item">
          <h4 class="title">Email Address</h4>
          <a class="email" href="mailto:info@instrail.com">support@instrail.com</a>
        </div>
        <div class="contact-details-item">
          <h4 class="title">Office Address</h4>
          <p class="detail">4517 Washington Ave.</p>
          <p class="detail">Manchester, Kentucky 39495</p>
          <p class="detail">England.</p>
        </div>
      </div>
      <div class="contact-form">
        <div>
          <label class="label" for="">Name <span class="star">*</span></label>
          <input
            class="input"
            type="text"
            name="Name"
            id="name"
            placeholder="Name"/>
        </div>
        <div>
          <label class="label" for="">Email Address <span class="star">*</span></label>
          <input
            class="input"
            type="email"
            name="email Addredd"
            id="email"
            placeholder="Email Address"/>
        </div>
        <div>
          <label class="label" for="">Subject <span class="star">*</span></label>
          <input
            class="input"
            type="text"
            name="subject"
            id="subject"
            placeholder="eg. Facilitator enquiry"/>
        </div>
        <div>
          <label class="label" for="">How can we help you <span class="star">*</span></label>
          <textarea
            class="message-input"
            type="text"
            name="message"
            id="message"
            placeholder="Enter message here">
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactPage from './Contact'
export default ContactPage
</script>

<style lang="scss" scoped src="./Contact.scss"></style>