const imgP = document.querySelector('#imgP');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');
const images = document.querySelectorAll('.image');
const mydiv1 = document.querySelector('#mydiv1');
const p1 = document.createElement('p1');

images.forEach(image => {
    image.addEventListener('click', function () {
        imgP.src = this.src;
        imgP.style.width = "800px";
        imgP.style.heigh = "400px";
        images.forEach(e => e.classList.remove('selection'))
        this.classList.add('selection')
        if (imgP.src === img1.src) {
            p1.innerHTML = " Perdez-vous dans le vert émeraude de nos palmeraies, où chaque palmier raconte l histoire d un partage des eaux ancestral, hérité de la sagesse d Ibn Chabbat."
            mydiv1.appendChild(p1);
        } else if (imgP.src === img2.src) {
            p1.innerHTML = "Oasis est un mot égyptien, qui nous est venu par l'intermédiaire des grecs et on doit à Hérodote la première description de la plus grande et de la plus célèbre des oasis : l'Egypte."
            mydiv1.appendChild(p1);
        }
        else if (imgP.src === img3.src) {
            p1.innerHTML = "En Tunisie, les oasis fleurissent dans le Djérid, un des pays les plus anciens du bas Sahara, domaine des belles palmeraies et qui, dès l'antiquité, doit sa réputation d'opulence aux verdoyantes oasis échelonnées sur le Chott El Djérid "
            mydiv1.appendChild(p1);
        }
        else if (imgP.src === img4.src) {
            p1.innerHTML = "Le Jérid, région semi-désertique du sud-ouest tunisien (cœur du gouvernorat de Tozeur), abrite des oasis célèbres comme Tozeur et Nefta, nichées entre le Sahara et le vaste lac salé Chott el-Jérid."
            mydiv1.appendChild(p1);
        }

    })
});

const imgP2 = document.querySelector('#imgP2');
const images2 = document.querySelectorAll('.image2');
const mydiv2 = document.querySelector('#mydiv2');
const p2 = document.createElement('p2');
const imgB1 = document.querySelector('#imgB1');
const imgB2 = document.querySelector('#imgB2');
const imgB3 = document.querySelector('#imgB3');

images2.forEach(image2 => {
    image2.addEventListener('click', function () {
        imgP2.src = this.src;
        images2.forEach(e => e.classList.remove('selection'))
        this.classList.add('selection')
        if (imgP2.src === imgB1.src) {
            p2.innerHTML = " Plus qu'un simple matériau de construction, la brique est utilisée pour créer une véritable dentelle architecturale."
            mydiv2.appendChild(p2);
        } else if (imgP2.src === imgB2.src) {
            p2.innerHTML = "Harmonie paysagère : La couleur ocre-dorée des briques s'intègre parfaitement au paysage désertique et oasien de la région."
            mydiv2.appendChild(p2);
        }
        else if (imgP2.src === imgB3.src) {
            p2.innerHTML = "Éco-construction : L'utilisation de matériaux locaux et la valorisation des déchets de la palmeraie (palmes pour le four, bois pour les toitures) en font un modèle d'architecture durable"
            mydiv2.appendChild(p2);
        }
        else {
            p2.innerHTML = "Isolation thermique : L'épaisseur des murs et le relief créé par les briques permettent de briser les rayons du soleil et de maintenir la fraîcheur à l'intérieur des maisons."
            mydiv2.appendChild(p2);
        }

    })
});

const introduction = document.querySelector('#introduction');
const mousemove = document.querySelector('.mousemouve')
introduction.addEventListener("mousemove", (e) => {
    mousemove.style.top = e.pageY + "px";
    mousemove.style.left = e.pageX + "px";
    mousemove.style.visibility = "visible";

});

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if (window.scrollY > 160) {
        nav.style.top = "0px";
        nav.style.left = "0px";
        nav.style.right = "0px";
        nav.style.position = "fixed";
        nav.style.width = "100%";
    }
    else {
        nav.style.position = "sticky";
    }
});

