
window.addEventListener("scroll", function (e) {
    if (!document.querySelectorAll(".no-home")) {
        if (scrollY > window.innerHeight ) {
            document.querySelectorAll("nav")[0].classList.add("bg-dark");
            document.querySelectorAll("nav")[1].classList.add("bg-dark");

            


        }else{
            document.querySelectorAll("nav")[0].classList.remove("bg-dark");
            document.querySelectorAll("nav")[1].classList.remove("bg-dark");


        }
    }else{
        if (scrollY > 70 ) {
            document.querySelectorAll(".navbar-nav")[0].classList.remove("text-white");
            document.querySelectorAll("nav")[0].classList.add("bg-white");
            document.querySelectorAll(".navbar-nav .btn")[0].classList.add("bg-dark");
            document.querySelectorAll(".navbar-nav .btn")[0].classList.add("text-white");
            document.querySelectorAll(".nav2")[0].classList.add("text-dark");



        }else {
            document.querySelectorAll("nav")[0].classList.remove("bg-white");
            document.querySelectorAll(".navbar-nav")[0].classList.add("text-white");
            document.querySelectorAll(".navbar-nav .btn")[0].classList.remove("bg-dark");
            document.querySelectorAll(".navbar-nav .btn")[0].classList.remove("text-white");
        }
    }

    
})



if(document.querySelector(".mobile-open")){
    document.querySelector(".mobile-open").addEventListener("click", function (e) {
    document.querySelector(".mobile-menu").classList.add("active")
  });
}

if(document.querySelector(".mobile-close")){
    document.querySelector(".mobile-close").addEventListener("click", function (e) {
    document.querySelector(".mobile-menu").classList.remove("active")
  });
}


// Animation-1

if(document.querySelector(".capsulcephe .ic")) {
  let capsulCephe = document.querySelectorAll(".capsulcephe .ic");

  for(let i = 0 ; i<capsulCephe.length; i++) {
    capsulCephe[i].addEventListener("click",function () {
      document.querySelector(".wrap-content").style.animation = 'divfade .2s ease-in';
      setTimeout ( function () {
        document.querySelector(".wrap-content").style.animation = 'none';
      }, 300);
    })
  }
}

// Animation-2

if(document.querySelector(".btn-capsul .btn-2")) {
  let capsulBtn = document.querySelectorAll(".btn-capsul .btn-2");

  for ( let i = 0; i<capsulBtn.length ; i++) {
    capsulBtn[i].addEventListener("click",function () {
      document.querySelector(".kapsar").style.animation = 'divfade .2s ease-in';
      setTimeout ( function () {
        document.querySelector(".kapsar").style.animation = 'none';
      }, 300);
    })
  }
}



const counters = document.querySelectorAll('.counter');
// Main function
for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 1000; // change animation speed here
    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}


let daireOzellikleri = [

  {
    title: "Zemin Kat Plan?? ??zellikleri",
    solrakamust: "1+1",
    solrakamalt:"79,87",
    teras:"Var",
    bahce:"Yok",
    banyo:"Var",
    otopark:"Var",
    kombi:"Var",
    balkon:"Yok",
    jakuzi:"Yok",
    img:"img/katplan-cati.jpg"

  },
  {
    title: "1.Kat Plan?? ??zellikleri",
    solrakamust: "2+1",
    solrakamalt:"80,87",
    teras:"Var",
    bahce:"Var",
    banyo:"Yok",
    otopark:"Var",
    kombi:"Yok",
    balkon:"Yok",
    jakuzi:"Var",
    img:"img/katplan-normal.jpg"

  },
  {
    title: "2. Kat Plan?? ??zellikleri",
    solrakamust: "3+1",
    solrakamalt:"81,87",
    teras:"Var",
    bahce:"Var",
    banyo:"Var",
    otopark:"Var",
    kombi:"Var",
    balkon:"Var",
    jakuzi:"Yok",
    img:"img/katplan-normal.jpg"

  },
  {
    title: "3.Kat Plan?? ??zellikleri",
    solrakamust: "4+1",
    solrakamalt:"82,87",
    teras:"Var",
    bahce:"Var",
    banyo:"Var",
    otopark:"Var",
    kombi:"Var",
    balkon:"Var",
    jakuzi:"Var",
    img:"img/katplan-cati.jpg"

  },
  {
    title: "4.Kat Plan?? ??zellikleri",
    solrakamust: "5+1",
    solrakamalt:"79,87",
    teras:"Var",
    bahce:"Yok",
    banyo:"Var",
    otopark:"Var",
    kombi:"Var",
    balkon:"Yok",
    jakuzi:"Yok",
    img:"img/katplan-normal.jpg"

  },

];





if(document.querySelector(".selectplain select")) {
  let dtl = document.querySelector(".selectplain select").addEventListener("change",function () {
    let index = this.value;
    document.querySelector(".title").textContent = daireOzellikleri[index].title;
    document.querySelector(".solrakamust").textContent = daireOzellikleri[index].solrakamust;
    document.querySelector(".solrakamalt").textContent = daireOzellikleri[index].solrakamalt;
    document.querySelector(".teras").textContent = daireOzellikleri[index].teras;
    document.querySelector(".bahce").textContent = daireOzellikleri[index].bahce;
    document.querySelector(".banyo").textContent = daireOzellikleri[index].banyo;
    document.querySelector(".otopark").textContent = daireOzellikleri[index].otopark;
    document.querySelector(".kombi").textContent = daireOzellikleri[index].kombi;
    document.querySelector(".balkon").textContent = daireOzellikleri[index].balkon;
    document.querySelector(".jakuzi").textContent = daireOzellikleri[index].jakuzi;
    document.querySelector(".img").textContent = daireOzellikleri[index].img;





  })
}



if(document.querySelector(".daire a")) {
  let detailDaire = document.querySelectorAll(".daire a");

  for(let i = 0; i < detailDaire.length; i++) {

    detailDaire[i].addEventListener("click",function(){
    let degisecek = document.querySelectorAll(".capsul-btnselect select-1");
    document.querySelector(".img").src=imgDizi[i];
      
      for(let j = 0; j<degisecek.length; j++) {
        degisecek[j].innerHTML=daireOzellikleri[i][j];
      }
    });

  }
} 


let icerikAbout = [
    [
      "Hakk??m??zda",
          "Almanya merkezli firmam??z Almanya Berlin ??ehrinde 1995 y??l??nda kurulmu??tur. Asseto Gmbh ve Asseto Baum Gmbh firmalar?? olarak  in??aat projeleri, restorasyon projeleri   ve ye??il alan ??evre d??zenlemesi alan??nda faaliyet g??stermektedir.",
          "Asseto Gmbh ??irketi konut, villa in??aat?? , i?? yeri in??aatlar?? ve restorasyon uygulamalar?? i??leri Asseto Baum Gmbh ??irketi ise Kamu kurumlar?? ve ??zel kurumlar i??in ??evre d??zenleme, ??zellikle park, bah??e a??a?? bak??m i??leri yapmak ??zere kurulmu??tur. Almanya???da bulunan grup firmalar?? K??ln, D??sseldorf ve Berlin ??ehirlerinde kamu ve ??zel sekt??re ait bir??ok bina kaba in??aat?? ve restorasyon in??aat?? yapm????t??r. <br /> <br /> <strong> www.asseto-gmbh.de </strong> <br /> <br /> 2009 y??l??nda T??rkiye???de de faaliyetlerine ba??layan Paipurth ??n??aat Sanayi ve Ticaret   A.?? ??zmir, ??stanbul, ??zmit gibi b??y??k??ehirlerde ??zel konsept konutlar ve A Plus Villalar ba??ta olmak ??zere Gayrimenkul  yat??r??mlar??na devam etmektedir. Paipurth ??n??aat Sanayi ve Ticaret   A.??. ileri teknoloji odakl?? y??netim anlay??????, g????l?? m??hendislik altyap??s??yla, 25 y??ll??k bilgi birikimi ve deneyimlerini bir araya getirerek in??aat sekt??r??nde fark yaratan bir firma olmay?? ba??arm????t??r. <br/> Paipurth ??n??aat Sanayi ve Ticaret   A.??. ileri teknoloji odakl?? y??netim anlay??????, g????l?? m??hendislik altyap??s??yla, 25 y??ll??k bilgi birikimi ve deneyimlerini   bir araya getirerek in??aat sekt??r??nde fark yaratan bir firma olmay?? ba??arm????t??r.",
      
    ],
    
    [
      "Vizyonumuz",
      "Ge??mi??imizden ald??????m??z miras??m??z?? bilgi ve deneyimimizi, g????l?? i??birlikleri, nitelikli insan kaynaklar?? ve yenilik??i yakla????mlar ile birle??tirerek Gayrimenkul sekt??r??nde T??rkiye???de ve D??nya???da tercih edilen bir kurum olmak.",
      "",
    ],

    [
      "Misyonumuz",
      "- M????terilerimizin beklentilerine en uygun ????z??mleri ??reterek memnuniyetlerini en ??st seviyede tutmak",
      "- Y??netim ve yap??m s??recimizi s??rekli geli??tirmek, tedarik??ilerimizi sisteminin b??t??n?? i??erisinde de??erlendirip g????l?? i??birlikler ile sekt??rde verimlili??i ve kaliteyi artt??rmak. <br/> <br/> - ??leri teknolojik geli??meleri takip edip uygulamak, ??evre dostu 1.s??n??f yap?? malzemelerini kullanarak estetik ve fonksiyonel a????dan iz b??rakacak gayrimenkul projeleri ??retmek. <br/> <br/> - Yeni ve ??zellikli projeler ger??ekle??tirerek, ekonomiye katma de??er ve topluma istihdam yaratmak. <br/> <br/> - Toplumda ??evre duyarl??l??????n??n ve i?? g??venli??i bilincinin geli??tirilmesine katk?? sa??lamak."
    ],

];

  let aboutPageImg = ["about-img-1", "about-img-2" ,"about-img-3"]

if(document.querySelector(".about-cat button")) {

    let aboutCat = document.querySelectorAll(".about-cat button");

    for(let i =0; i<aboutCat.length; i++) {

      aboutCat[i].addEventListener("click",function() {
          
        document.querySelector(".about-content-wrap").style.animation = 'divfade .2s ease-in';
          setTimeout(function() {
            document.querySelector(".about-content-wrap").style.animation = 'none';
          }, 300);

          document.querySelector(".about-cat button.btn-light").classList.add("btn-outline-light");
          document.querySelector(".about-cat button.btn-light").classList.remove("btn-light");
          this.classList.remove("btn-outline-light");
          this.classList.add("btn-light");

          document.querySelector(".about-img").src = `img/${aboutPageImg[i]}.png`;
            
          // content
          let contentchange = document.querySelectorAll(".acw-content p");
          for(let j =0; j<aboutCat.length;j++) {
              contentchange[j].innerHTML=icerikAbout[i][j];
          }

      });
    }
}





  // hero Owl
var hery= $('.slider .owl-carousel');
hery.owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  dotsContainer: '#dots-hero',
  autoplay:false,
  animateIn: 'fadeIn', // add this
  animateOut: 'fadeOut', // and this

  
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});
$('#dots-hero .owl-dot').click(function () {
  hery.trigger('to.owl.carousel', [$(this).index(), 0]);
});

$('#dots-arrow .beft').click(function() { 
  hery.trigger('prev.owl.carousel');
})
$('#dots-arrow .bight').click(function() {
  hery.trigger('next.owl.carousel');
});




$(".icon-1").click(function(event) {
  $(".title-changed").text("Nefes Alan D???? Cephe");              
  $(".p-changed").html("??ZOCAM Marka ge??irmezlik yo??unlu??u y??ksek ta?? y??n?? cephe mantolama ile Hammaddesi do??adan gelen ta?? olan ta??y??n??, do??al olarak sa??lam ve dayan??kl??d??r s??cakl??k ve nem de??i??ikliklerinden etkilenmez ve boyutsal kararl??l??k g??sterir. <br/> Uzun y??llar boyunca performans??nda bir de??i??iklik olmadan yal??t??m i??levini yerine getirerek ??m??r boyu y??ksek performans sa??layan evler olu??turduk. <br/> <br/> KOMPOZ??T CEPHE ile Estetik ve p??r??zs??z yap??s?? ????k bir g??r??n??m sa??lamakla birlikte Dayan??kl?? Koruyucudur. Hava etkilerine dayan??m?? sayesinde kaplad?????? alan?? korur. Is?? ve ses iletim katsay??s?? d??????kt??r. Estetik ve s??rd??r??lebilirli??in de??erini biliyoruz. <br/> <br/> JOTUN MARKA d???? ve i?? cephe boya ve macun yap??lmas??nda kulland??k ????nk?? E??FFEL KULES??N??N dahi bu marka ile boyand??????n?? bildi??imizden en iyisini hak edenlere en iyisini sunmak i??in yola ????kt??k.");
  $(".img-changed").attr("src", "img/photovideo5.png");    
});

$(".icon-2").click(function(event) {
  $(".title-changed").text("A+ S??n??f Malzemeler");              
  $(".p-changed").html("Y??ksek mukavemetli beton k??pr??lerde, y??ksek katl?? yap??larda tercih edilen C50 s??n??f??ndaki betonu Paipurth olarak Temel beton dayan??m?? ve su yal??t??m?? i??in b??t??n dairelerimizde kulland??k. <br/> <br/> 1.s??n??f kimyasaldan uzak daire i?? kap??, fortmanto ve mutfak dolaplar?? ile  do??a uyumlu karbon ayak izimizi azaltacak uzun ??m??rl??, sa??l??kl?? ya??am alanlar?? olu??turduk. <br />  <br /> 1.s??n??f seramik ve parke d????eme yap??lmas??nda do??al ta??lardan destek al??p 12 mm kal??nl??????nda parke d????ememizle uzun ??m??r ve kalitesine ek hem ses hem ??s?? ka??aklar?? i??in bir ??nlem daha ald??k.");
  $(".img-changed").attr("src", "img/photovideo.png");  
       
});

$(".icon-3").click(function(event) {
  $(".title-changed").text("Su Ge??irmeme G??vencesi");              
  $(".p-changed").html("Temel alt?? ??zel drenaj sistemi ile D???? mekanlarda sadece su ge??irmezli??i de??il nem ge??irmezli??i de sa??layarak sa??l??kl?? ortamlar sunuyoruz <br/> <br/>KNAUF Marka ??atlama ve da????lma ??nleyici fileli s??va uygulamas?? b??t??n duvarlar??m??zda ger??ekle??tirdik ????nk?? Nem, ??atlak boyunca duvar??n i??ine girer ve bir s??ngerdeki gibi yay??l??r, i??leyen nem, duvardaki ??s?? yal??t??m yetene??ini azaltarak d???? cephe boya tabakas??ndan d???? s??vaya, tu??laya do??ru t??rman??r ve duvar??n ??tesindeki son kat malzemelere bask?? yapabilir. Gev??eyen yerlerden k??????k par??alar d??k??lmeye ba??lar. Ger??ek tehlike, ??atlak olu??umlar??ndan dolay?? tabii olarak ortaya ????kan s??rekli hasarlard??r. E??er zaman??nda tesbit edilemezlerse, bina kullan??lamaz duruma gelebilir. Biliyoruz ki kalite k??????k ve de??ersiz gibi g??r??nen detaylarda sakl??d??r. ");
  $(".img-changed").attr("src", "img/photovideo3.png");  
       
});

$(".icon-4").click(function(event) {
  $(".title-changed").text("Konfor Alan??");              
  $(".p-changed").html("G??n ?????????? ve temiz havan??n insan sa??l??????na ??nemli etkileri bulundu??unu bildi??imizden. ??at?? pencereleri bu ihtiyaca en efektif ????z??m?? sizlere sunuyoruz. ??at?? dublekslerde tavanda welux cam uygulamas?? ile ??at?? pencereleri kullan??ld?????? mekanlara g??n ?????????? ve temiz hava getirerek bu alanlar??n ya??am kalitesini y??kselttik. <br/> <br/> Ev en g??venli en huzurlu alan bunu ??ok iyi biliyoruz bu nedenle ??ap alt?? ses ve izolasyon yal??t??m??, daire aralar?? ses yal??t??m?? yapt??k mahremiyetiniz bizim i??in ??nemli. <br/> <br/> Spot ve Led ayd??nlatmalarla, geleneksel ayd??nlatmalara oranla daha uzun ??m??rl??, d??????k enerji kullan??m??, y??ksek dayan??kl??l??k gibi ??nemli avantajlara sahip g??n ?????????? etkisi sa??l??yoruz <br/> <br/> Her daireye ait kapal?? otoparklar??m??z ile hem zamandan tasarruf sa??lay??p de??erli vaktinizi ??nemsiz detaylara ay??rman??z??n ??n??ne ge??iyor hem de g??venli??inizi sa??l??yoruz.");
  $(".img-changed").attr("src", "img/photovideo6.png");  
       
});

$(".icon-5").click(function(event) {
  $(".title-changed").text("Ak??ll?? Ev Sistemleri");              
  $(".p-changed").html("Herkes son teknolojiyi ve yenilikleri hak eder ??ok da Paipurth ailesi bu nedenle Siemens ankastre seti ve mikrodalga f??r??nlar??m??zla konfor alan??n??z?? geni??letiyoruz. Ev en g??venli en huzurlu alan bunu ??ok iyi biliyoruz bu nedenle ??ap alt?? ses ve izolasyon yal??t??m??, daire aralar?? ses yal??t??m?? yapt??k mahremiyetiniz bizim i??in ??nemli. <br/> <br/> Her dairemiz de kulland??????m??z viessman kombilerle Tamam?? ??st??n teknoloji ??r??n?? olan ??s??tma sistemleriyle daima daha iyisi hedefledik. Enerjinin verimli kullan??lmas?? sayesinde giderler azalt??larak kaynaklar??n??z ve ??evreyi koruyaca????z. <br/> <br/>Her daire i??in 2 adet Mitsubishi klima ile M????terilerimizin ihtiya??lar??na tasarruflu, g??venli, ??evre dostu y??ksek performansl?? klima modelleri ile cevap veriyoruz s??rekli teknolojik yenilik ve kesintisiz yarat??c??l??kla; rahat bir yuvan??z??n olu??mas??na katk??da bulunaca????z.");
  $(".img-changed").attr("src", "img/photovideo7.png"); 

       
});



  


$('.galery-partners').owlCarousel ({

  margin:30,
  dots:false,
  loop:true,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive: {
    0: {items:1},
    768: {items:3},
    1170: {items: 5},
  }


});


let dizi = [
  "Paipurt Kocaeli i??in harekete ge??ti!!",
  "Paipurt izmir konutlar??nda yo??un ilgi s??r??yor. F??rsat?? ka????rmay??n!!",
  "Paipurt ??stanbul konutlar??nda b??y??k indirim ba??lad??!!",
  "Paipurt Sakarya i??in harekete ge??ti!!"
];

let key = 0;
 document.getElementById("chevron-left").addEventListener("click", function(e) {
    e.preventDefault();
    if(key != 0) {
        key--;
        $('#slider-paragraph').html(dizi[key])
    }
    if(key === 0){
        key = 4;
        $('#slider-paragraph').html(dizi[4])
    }
});

document.getElementById("chevron-right").addEventListener("click", function(e) {
    e.preventDefault();
    if(key != 4) {
          key++;
        $('#slider-paragraph').html(dizi[key])
    }
    if(key === 4){
        key = 0;
        $('#slider-paragraph').html(dizi[0])

    }
});



// End Filtres

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();



$(".c-open").click(function (event) {
  event.preventDefault();          
  $(".c-form").addClass("active")
})

$(".c-form-close").click(function (event) {
  event.preventDefault();
  $(".c-form").removeClass("active")
})

$(".seven-wrap .owl-carousel").on("click", "a", function (e) {
  e.preventDefault();
  $(".c-form").addClass("active")    
})

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
      $(".navbar").addClass("bg-white");
  } else {
      $(".navbar").removeClass("bg-white");
  }
});

const btnGreen = document.querySelectorAll(".btn-green")
for (let i = 0; i < btnGreen.length; i++) {
  btnGreen[i].addEventListener("click", function (event) {
      event.preventDefault();
      $(".c-form").addClass("active");
  })
}



let element = $(".icon-1");
let element2 = $(".icon-2").css("opacity", "0.4");
let element3 = $(".icon-3").css("opacity", "0.4");
let element4 = $(".icon-4").css("opacity", "0.4");
let element5 = $(".icon-5").css("opacity", "0.4");

element.click(function (e) {
  element.css("opacity", "1");
  element2.css("opacity", "0.4");
  element3.css("opacity", "0.4");
  element4.css("opacity", "0.4");
  element5.css("opacity", "0.4");
});
element2.click(function (e) {
  element2.css("opacity", "1");
  element.css("opacity", "0.4");
  element3.css("opacity", "0.4");
  element4.css("opacity", "0.4");
  element5.css("opacity", "0.4");
});
element3.click(function (e) {
  element3.css("opacity", "1");
  element.css("opacity", "0.4");
  element2.css("opacity", "0.4");
  element4.css("opacity", "0.4");
  element5.css("opacity", "0.4");
});
element4.click(function (e) {
  element4.css("opacity", "1");
  element.css("opacity", "0.4");
  element2.css("opacity", "0.4");
  element3.css("opacity", "0.4");
  element5.css("opacity", "0.4");
});
element5.click(function (e) {
  element5.css("opacity", "1");
  element.css("opacity", "0.4");
  element2.css("opacity", "0.4");
  element3.css("opacity", "0.4");
  element4.css("opacity", "0.4");
});

