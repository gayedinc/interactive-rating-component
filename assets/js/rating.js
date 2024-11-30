const stars = document.querySelectorAll('.star');
const rateNumber = document.querySelector('.rateNumber');

// her bir yıldızın üzerinde dönüyoruz - 1, 2, 3, 4, 5
for (const star of stars) {
  star.addEventListener('click', handleFeedback);
}

submitBtn.addEventListener('click', handleSecondScreen); // submit olduğunda 2. ekran olan teşekkür ekranı çıkacak

let selectedRating = null; // kullanıcının seçimini tutmak için boş bir değişken

function handleFeedback() {
  selectedRating = this.innerText; // kullanıcı seçinlerini selectedRating değişkenine atıyoruz
  rateNumber.innerText = selectedRating; // seçilen ve 2. ekranda gözükecek olan elementin innerText'ine selectedRating'i eşitliyoruz

  for (const star of stars) { // her bir yıldızın üzerinde dönerek selected sınıfı her birinden kaldırıyoruz
    star.classList.remove('selected');
    // selected sınıfını sadece seçilen yıldıza ekliyoruz
    star.classList.add('selected');
  }
}

const ratingContainer = document.querySelector('.ratingContainer');
const thankContainer = document.querySelector('.thankContainer');

thankContainer.classList.add('d-none'); // teşekkür sayfası sayfa ilk yüklendiğinde gözükmemesi için

function handleSecondScreen() {
  // Eğer hiçbir yıldız seçilmezse
  if (!selectedRating) {
    // Önceden oluşturulmuş bir uyarı metni olup olmadığını kontrol etmek için
    const existingWarnTxt = document.querySelector('.warnTxt');
    if (!existingWarnTxt) { // Eğer yoksa yeni bir tane oluştur
      const warnTxt = document.createElement('div');
      warnTxt.innerHTML = `
          <img src="assets/img/false-icon.svg" alt="Quiz Subject Icon">
          <p>Please provide feedback.</p>
        `;

      ratingContainer.appendChild(warnTxt); // warnTxt'i ratingContainer'ın son çocuğu olarak ekle
      warnTxt.classList.add('warnTxt'); // warnTxt' warnTxt adlı bir css sınıfı ekle
    }
    return; // bir yıldız seçilmeden ikinci ekranın görünmemesi için if bloğundan çıkıyoruz
  }

  // Eğer bir yıldız seçilirse de rating ekranını kaldır ve teşekkür ekranını göster
  ratingContainer.classList.add('d-none');
  thankContainer.classList.add('d-block');
}
