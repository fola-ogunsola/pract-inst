

export default {
 name: 'FAQ',
 data: () => ({
  showAnswers: false,
  faqData: 
   {
    question: 'what is instrail?',
    answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate'
   },

  
 }),
 props: {
   data:{
    type: Object,
   }
 },
 methods:{
  toggleAnswers(){
   this.showAnswers = !this.showAnswers
  }
 }
}