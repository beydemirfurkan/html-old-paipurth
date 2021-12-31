
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
    title: "Zemin Kat Planı Özellikleri",
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
    title: "1.Kat Planı Özellikleri",
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
    title: "2. Kat Planı Özellikleri",
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
    title: "3.Kat Planı Özellikleri",
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
    title: "4.Kat Planı Özellikleri",
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
      "Hakkımızda",
          "Almanya merkezli firmamız Almanya Berlin şehrinde 1995 yılında kurulmuştur. Asseto Gmbh ve Asseto Baum Gmbh firmaları olarak  inşaat projeleri, restorasyon projeleri   ve yeşil alan çevre düzenlemesi alanında faaliyet göstermektedir.",
          "Asseto Gmbh şirketi konut, villa inşaatı , iş yeri inşaatları ve restorasyon uygulamaları işleri Asseto Baum Gmbh şirketi ise Kamu kurumları ve özel kurumlar için çevre düzenleme, özellikle park, bahçe ağaç bakım işleri yapmak üzere kurulmuştur. Almanya’da bulunan grup firmaları Köln, Düsseldorf ve Berlin şehirlerinde kamu ve özel sektöre ait birçok bina kaba inşaatı ve restorasyon inşaatı yapmıştır. <br /> <br /> <strong> www.asseto-gmbh.de </strong> <br /> <br /> 2009 yılında Türkiye’de de faaliyetlerine başlayan Paipurth İnşaat Sanayi ve Ticaret   A.Ş İzmir, İstanbul, İzmit gibi büyükşehirlerde özel konsept konutlar ve A Plus Villalar başta olmak üzere Gayrimenkul  yatırımlarına devam etmektedir. Paipurth İnşaat Sanayi ve Ticaret   A.Ş. ileri teknoloji odaklı yönetim anlayışı, güçlü mühendislik altyapısıyla, 25 yıllık bilgi birikimi ve deneyimlerini bir araya getirerek inşaat sektöründe fark yaratan bir firma olmayı başarmıştır. <br/> Paipurth İnşaat Sanayi ve Ticaret   A.Ş. ileri teknoloji odaklı yönetim anlayışı, güçlü mühendislik altyapısıyla, 25 yıllık bilgi birikimi ve deneyimlerini   bir araya getirerek inşaat sektöründe fark yaratan bir firma olmayı başarmıştır.",
      
    ],
    
    [
      "Vizyonumuz",
      "Geçmişimizden aldığımız mirasımızı bilgi ve deneyimimizi, güçlü işbirlikleri, nitelikli insan kaynakları ve yenilikçi yaklaşımlar ile birleştirerek Gayrimenkul sektöründe Türkiye’de ve Dünya’da tercih edilen bir kurum olmak.",
      "",
    ],

    [
      "Misyonumuz",
      "- Müşterilerimizin beklentilerine en uygun çözümleri üreterek memnuniyetlerini en üst seviyede tutmak",
      "- Yönetim ve yapım sürecimizi sürekli geliştirmek, tedarikçilerimizi sisteminin bütünü içerisinde değerlendirip güçlü işbirlikler ile sektörde verimliliği ve kaliteyi arttırmak. <br/> <br/> - İleri teknolojik gelişmeleri takip edip uygulamak, çevre dostu 1.sınıf yapı malzemelerini kullanarak estetik ve fonksiyonel açıdan iz bırakacak gayrimenkul projeleri üretmek. <br/> <br/> - Yeni ve özellikli projeler gerçekleştirerek, ekonomiye katma değer ve topluma istihdam yaratmak. <br/> <br/> - Toplumda çevre duyarlılığının ve iş güvenliği bilincinin geliştirilmesine katkı sağlamak."
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
  $(".title-changed").text("Nefes Alan Dış Cephe");              
  $(".p-changed").html("İZOCAM Marka geçirmezlik yoğunluğu yüksek taş yünü cephe mantolama ile Hammaddesi doğadan gelen taş olan taşyünü, doğal olarak sağlam ve dayanıklıdır sıcaklık ve nem değişikliklerinden etkilenmez ve boyutsal kararlılık gösterir. <br/> Uzun yıllar boyunca performansında bir değişiklik olmadan yalıtım işlevini yerine getirerek ömür boyu yüksek performans sağlayan evler oluşturduk. <br/> <br/> KOMPOZİT CEPHE ile Estetik ve pürüzsüz yapısı şık bir görünüm sağlamakla birlikte Dayanıklı Koruyucudur. Hava etkilerine dayanımı sayesinde kapladığı alanı korur. Isı ve ses iletim katsayısı düşüktür. Estetik ve sürdürülebilirliğin değerini biliyoruz. <br/> <br/> JOTUN MARKA dış ve iç cephe boya ve macun yapılmasında kullandık çünkü EİFFEL KULESİNİN dahi bu marka ile boyandığını bildiğimizden en iyisini hak edenlere en iyisini sunmak için yola çıktık.");
  $(".img-changed").attr("src", "img/photovideo5.png");    
});

$(".icon-2").click(function(event) {
  $(".title-changed").text("A+ Sınıf Malzemeler");              
  $(".p-changed").html("Yüksek mukavemetli beton köprülerde, yüksek katlı yapılarda tercih edilen C50 sınıfındaki betonu Paipurth olarak Temel beton dayanımı ve su yalıtımı için bütün dairelerimizde kullandık. <br/> <br/> 1.sınıf kimyasaldan uzak daire iç kapı, fortmanto ve mutfak dolapları ile  doğa uyumlu karbon ayak izimizi azaltacak uzun ömürlü, sağlıklı yaşam alanları oluşturduk. <br />  <br /> 1.sınıf seramik ve parke döşeme yapılmasında doğal taşlardan destek alıp 12 mm kalınlığında parke döşememizle uzun ömür ve kalitesine ek hem ses hem ısı kaçakları için bir önlem daha aldık.");
  $(".img-changed").attr("src", "img/photovideo.png");  
       
});

$(".icon-3").click(function(event) {
  $(".title-changed").text("Su Geçirmeme Güvencesi");              
  $(".p-changed").html("Temel altı özel drenaj sistemi ile Dış mekanlarda sadece su geçirmezliği değil nem geçirmezliği de sağlayarak sağlıklı ortamlar sunuyoruz <br/> <br/>KNAUF Marka çatlama ve dağılma önleyici fileli sıva uygulaması bütün duvarlarımızda gerçekleştirdik çünkü Nem, çatlak boyunca duvarın içine girer ve bir süngerdeki gibi yayılır, işleyen nem, duvardaki ısı yalıtım yeteneğini azaltarak dış cephe boya tabakasından dış sıvaya, tuğlaya doğru tırmanır ve duvarın ötesindeki son kat malzemelere baskı yapabilir. Gevşeyen yerlerden küçük parçalar dökülmeye başlar. Gerçek tehlike, çatlak oluşumlarından dolayı tabii olarak ortaya çıkan sürekli hasarlardır. Eğer zamanında tesbit edilemezlerse, bina kullanılamaz duruma gelebilir. Biliyoruz ki kalite küçük ve değersiz gibi görünen detaylarda saklıdır. ");
  $(".img-changed").attr("src", "img/photovideo3.png");  
       
});

$(".icon-4").click(function(event) {
  $(".title-changed").text("Konfor Alanı");              
  $(".p-changed").html("Gün ışığı ve temiz havanın insan sağlığına önemli etkileri bulunduğunu bildiğimizden. Çatı pencereleri bu ihtiyaca en efektif çözümü sizlere sunuyoruz. Çatı dublekslerde tavanda welux cam uygulaması ile Çatı pencereleri kullanıldığı mekanlara gün ışığı ve temiz hava getirerek bu alanların yaşam kalitesini yükselttik. <br/> <br/> Ev en güvenli en huzurlu alan bunu çok iyi biliyoruz bu nedenle şap altı ses ve izolasyon yalıtımı, daire araları ses yalıtımı yaptık mahremiyetiniz bizim için önemli. <br/> <br/> Spot ve Led aydınlatmalarla, geleneksel aydınlatmalara oranla daha uzun ömürlü, düşük enerji kullanımı, yüksek dayanıklılık gibi önemli avantajlara sahip gün ışığı etkisi sağlıyoruz <br/> <br/> Her daireye ait kapalı otoparklarımız ile hem zamandan tasarruf sağlayıp değerli vaktinizi önemsiz detaylara ayırmanızın önüne geçiyor hem de güvenliğinizi sağlıyoruz.");
  $(".img-changed").attr("src", "img/photovideo6.png");  
       
});

$(".icon-5").click(function(event) {
  $(".title-changed").text("Akıllı Ev Sistemleri");              
  $(".p-changed").html("Herkes son teknolojiyi ve yenilikleri hak eder çok da Paipurth ailesi bu nedenle Siemens ankastre seti ve mikrodalga fırınlarımızla konfor alanınızı genişletiyoruz. Ev en güvenli en huzurlu alan bunu çok iyi biliyoruz bu nedenle şap altı ses ve izolasyon yalıtımı, daire araları ses yalıtımı yaptık mahremiyetiniz bizim için önemli. <br/> <br/> Her dairemiz de kullandığımız viessman kombilerle Tamamı üstün teknoloji ürünü olan ısıtma sistemleriyle daima daha iyisi hedefledik. Enerjinin verimli kullanılması sayesinde giderler azaltılarak kaynaklarınız ve çevreyi koruyacağız. <br/> <br/>Her daire için 2 adet Mitsubishi klima ile Müşterilerimizin ihtiyaçlarına tasarruflu, güvenli, çevre dostu yüksek performanslı klima modelleri ile cevap veriyoruz sürekli teknolojik yenilik ve kesintisiz yaratıcılıkla; rahat bir yuvanızın oluşmasına katkıda bulunacağız.");
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
  "Paipurt Kocaeli için harekete geçti!!",
  "Paipurt izmir konutlarında yoğun ilgi sürüyor. Fırsatı kaçırmayın!!",
  "Paipurt İstanbul konutlarında büyük indirim başladı!!",
  "Paipurt Sakarya için harekete geçti!!"
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

