<template>
  <div>
    <page-header>Frequently Asked Questions</page-header>
    <div class="container">
      <div class="content">
        <i-faq v-for="question in questions" :key="question.id" :data="question"></i-faq>
      </div>
    </div>
  </div>
</template>

<script>
import { PageHeader, IFaq } from "@/components";
export default {
  name: "FAQ",
  components: {
    PageHeader,
    IFaq,
  },
  data: () => ({
    questions: [
      {
        id: '1',
        question: 'What is instrail',
        answer: 'It is a web application that will be used to onboard customers, purchase most preferred and various insurance policies, schedule appointments, make claims , make payment via several payment methods and referrals. The system also provides an interface for admin users to manage users, customers, appointments, reporting and analytics, support etc.'
      },
      {
        id: '2',
        question: 'Can I create my own insurance policy?',
        answer: 'Yes you can, just sign in your your admin dashboard and click on create new policy'
      },
      {
        id: '3',
        question: 'Do you have a mobile application?',
        answer: 'Instrail is very much responsive and it fills the gap of developing a mobile application for the same purpose.'
      },
      {
        id: '4',
        question: 'What are the payment options like?',
        answer: 'You can contact us to help demo the product and guide you through picking the best plan for your organization.'
      },
      {
        id: '5',
        question: 'Can I have multiple users on the Instrail?',
        answer: 'Yes you can!, the platform comes with 3 default roles with the opportunity to create more and assign them roles and permissions.'
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.content {
  margin: 10rem 0 18rem 0;
  padding: 0 14rem;

  @media (max-width: 768px) {
    padding: 0 5%;
  }

  .title {
    font-family: Poppins;
    font-weight: 600;
    font-size: 2.6rem;
    line-height: 4rem;
    letter-spacing: 0.01rem;
    color: $dark;
    margin-bottom: 2.4rem;
    padding-top: 3.2rem;
    border-top: 1px solid #dde5ee;
  }
  .description {
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 3.2rem;
    color: #6d7a98;
    margin-bottom: 3rem;
  }
  .email-span {
    color: $blue;
  }
  ul {
    list-style: none;
  }

  ul li::before {
    content: "\2022";
    color: $dark;
    font-weight: 600;
    display: inline-block;
    width: 1em;
    height: 1rem;
  }
}
</style>