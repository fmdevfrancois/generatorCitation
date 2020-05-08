var citations = [
{auteur:'Albert Einstein',citation:' Le monde ne sera pas détruit par ceux qui font le mal, mais par ceux qui les regardent sans rien faire.'},
{auteur:'Albert Einstein',citation:'N\'essayez pas de devenir un homme qui a du succès. Essayez de devenir un homme qui a de la valeur..'},
{auteur:'Albert Einstein',citation:'Placez votre main sur un poêle une minute et ça vous semble durer une heure. Asseyez vous auprès d\'une jolie fille une heure et ça vous semble durer une minute. C\'est ça la relativité.'},
{auteur:'Friedrich Nietzsche',citation:'La vie sans musique est tout simplement une erreur, une fatigue, un exil.'},
{auteur:'Friedrich Nietzsche',citation:'Deviens ce que tu es. Fais ce que toi seul peut faire.'},
{auteur:'René Descartes',citation:'Je pense, donc je suis.'},
{auteur:'René Descartes',citation:'Le bon sens est la chose au monde la mieux partagée : car chacun pense en être bien pourvu.'},
{auteur:'Aristote',citation:'L\'ignorant affirme, le savant doute, le sage réfléchit'},
{auteur:'Aristote',citation:'Le courage est le juste milieu entre la peur et l\'audace.'},
{auteur:'Baruch Spinoza',citation:'Ne pas railler, ne pas déplorer, ne pas maudire, mais comprendre.'},
{auteur:'Baruch Spinoza',citation:'Il vaut mieux enseigner les vertus que condamner les vices.'}]



var app = new Vue ({
    el: '#app',
    data: {
     citation:'',
     auteur:''
    },
    methods:{
      generate:function (){
        let num =   Math.floor(Math.random() * (citations.length - 0)) + 0;
      this.citation = citations[num].citation;
      this.auteur = citations[num].auteur;
      },
     created:function(){
        let num =   Math.floor(Math.random() * (citations.length - 0)) + 0;
        console.log(num);
         this.citation = citations[num].citation;
         this.auteur = citations[num].auteur;
      }
    }
  })
