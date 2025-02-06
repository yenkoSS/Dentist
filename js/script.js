const collapserTitleList = document.querySelectorAll(".collapser-title");

collapserTitleList.forEach((element) => {
  element.addEventListener("click", () => {
    const elParent = element.parentElement;

    const elParentChilds = elParent.childNodes;
    const elDetails = elParentChilds[3];

    const elDetailsDisplay = window.getComputedStyle(elDetails).display;
    if (elDetailsDisplay === "none") {
      elDetails.style.display = "block";
    } else {
      elDetails.style.display = "none";
    }
  });
});

const endoPrices = `  <table>
                          <tr>
                            <th>Serviciu</th>
                            <th>Preț</th>
                          </tr>
                          <tr>
                            <td>Aplicare Antiseptic/Antibiotic</td>
                            <td>100 LEI</td>
                          </tr>
                          <tr>
                            <td>Consultație Endodonție</td>
                            <td>140 LEI</td>
                          </tr>
                          <tr>
                            <td>Decontaminarea Canalelor cu Laser</td>
                            <td>180 LEI</td>
                          </tr>
                          <tr>
                            <td>Dezobturare Canal Radicular</td>
                            <td>80 LEI</td>
                          </tr>
                          <tr>
                            <td>Drenaj Endodontic</td>
                            <td>200 LEI</td>
                          </tr>
                          <tr>
                            <td>Obturație Canal Monoradicular</td>
                            <td>160 LEI</td>
                          </tr>
                        </table>`;

const odontoPrices = `<table>
                          <tr>
                            <th>Serviciu</th>
                            <th>Preț</th>
                          </tr>
                          <tr>
                            <td>Chiuretaj în Câmp Deschis</td>
                            <td>100 LEI</td>
                          </tr>
                          <tr>
                            <td>Chiuretaj în Câmp Deschis/Dinte (6 mm)</td>
                            <td>140 LEI</td>
                          </tr>
                          <tr>
                            <td>Chiuretaj în Câmp Închis</td>
                            <td>180 LEI</td>
                          </tr>
                          <tr>
                            <td>Consultație Parodontologie</td>
                            <td>80 LEI</td>
                          </tr>
                          <tr>
                            <td>Control Periodic Parodontologic (Recall)</td>
                            <td>200 LEI</td>
                          </tr>
                          <tr>
                            <td>Decapușonare Molar de Minte Asistat Laser</td>
                            <td>160 LEI</td>
                          </tr>
                        </table>`;

const ortoPrices = ` <table>
                          <tr>
                            <th>Serviciu</th>
                            <th>Preț</th>
                          </tr>
                          <tr>
                            <td>Activare Aparat Ortodontic Fix 1 Arcadă</td>
                            <td>100 LEI</td>
                          </tr>
                          <tr>
                            <td>Activare Aparat Ortodontic Fix 2 Arcade</td>
                            <td>140 LEI</td>
                          </tr>
                          <tr>
                            <td>Aparat Clear Aligner – Malocluzie Moderată</td>
                            <td>180 LEI</td>
                          </tr>
                          <tr>
                            <td>Aparat Clear Aligner – Malocluzie Severă</td>
                            <td>80 LEI</td>
                          </tr>
                          <tr>
                            <td>Aparat Clear Aligner – Malocluzie Ușoară</td>
                            <td>200 LEI</td>
                          </tr>
                          <tr>
                            <td>Aparat Fix Ceramic Autoligaturant/Arcadă</td>
                            <td>160 LEI</td>
                          </tr>
                        </table>`;

const implantPrices = `<table>
                          <tr>
                            <th>Serviciu</th>
                            <th>Preț</th>
                          </tr>
                          <tr>
                            <td>Implant Dentar MEGAGEN AnyOne</td>
                            <td>100 LEI</td>
                          </tr>
                          <tr>
                            <td>Implant Dentar MEGAGEN AnyRidge</td>
                            <td>140 LEI</td>
                          </tr>
                          <tr>
                            <td>Implant Dentar ZIMMER USA BIOMET</td>
                            <td>180 LEI</td>
                          </tr>
                          <tr>
                            <td>Implant Dentar NOBEL BIOCARE</td>
                            <td>80 LEI</td>
                          </tr>
                          <tr>
                            <td>Adiție Bloc Osos Artificial Biooss</td>
                            <td>200 LEI</td>
                          </tr>
                          <tr>
                            <td>Adiție de Os Tehnica Tenting</td>
                            <td>160 LEI</td>
                          </tr>
                        </table>`;

const tablePrices = document.querySelector(".table-prices");

const optionsListItemList = document.querySelectorAll(".options-list-item");

optionsListItemList.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent.includes("Endodonție")) {
      console.log("entered endo");
      tablePrices.innerHTML = endoPrices;
    }

    if (e.target.textContent.includes("Odontologie")) {
      tablePrices.innerHTML = odontoPrices;
    }

    if (e.target.textContent.includes("Ortodonție")) {
      tablePrices.innerHTML = ortoPrices;
    }

    if (e.target.textContent.includes("Implantologie")) {
      tablePrices.innerHTML = implantPrices;
    }
  });
});

const iconMenuEl = document.querySelector(".icon-menu");
const navPhoneEl = document.querySelector(".nav-li-phone");
const iconCloseEl = document.querySelector(".icon-close");
iconMenuEl.addEventListener("click", () => {
  if (navPhoneEl.style.display === "none") {
    navPhoneEl.style.display = "flex";
  } else {
    navPhoneEl.style.display = "none";
  }
});

iconCloseEl.addEventListener("click", () => {
  navPhoneEl.style.display = "none";
});

const navLiPhoneLinksList = document.querySelectorAll(".nav-link-phone");

navLiPhoneLinksList.forEach((el) => {
  el.addEventListener("click", () => {
    navPhoneEl.style.display = "none";
  });
});

const aboutUsSectionPosition = document
  .querySelector(".section-about")
  .getBoundingClientRect().top;

const navHeaderEl = document.querySelector(".nav-header");

window.addEventListener("scroll", () => {
  console.log(aboutUsSectionPosition);
  console.log(scrollY);
  if (scrollY > 700) {
    navHeaderEl.classList.add("nav-fixed");
  }

  if (scrollY < 700) {
    navHeaderEl.classList.remove("nav-fixed");
  }
});
