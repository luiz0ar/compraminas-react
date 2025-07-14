import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner.jsx';
import ArticleLayout from '../../components/PressSection/PressSection.jsx';
import pressImage1 from '../../assets/1000x667.png';
import LocationSection from '../../components/LocationSection/LocationSection.jsx';

const articleData = {
  title: 'Compra Minas, da Minasul, apresenta soluções para sua lavoura',
  publishDate: '14 de Julho de 2025',
  featuredImage: pressImage1,
  content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in neque quam. Quisque a fermentum neque. Nullam orci mauris, tempus nec sagittis gravida, dictum non eros. Quisque iaculis enim non dui venenatis, ut aliquam diam finibus. Morbi sed feugiat eros. Quisque nunc neque, suscipit sed purus imperdiet, efficitur cursus enim. Sed faucibus eros venenatis sollicitudin porttitor. Pellentesque ut lacus elementum, ultrices leo vel, rutrum felis. Suspendisse eu urna in mauris venenatis pellentesque. Pellentesque venenatis neque erat, eget lobortis erat luctus non.

Sed tincidunt lorem eu lectus aliquam porta. Nulla eros odio, accumsan sed accumsan ac, sagittis sit amet ex. Suspendisse potenti. Suspendisse feugiat laoreet metus sed imperdiet. Nunc efficitur ex nec tempor consectetur. Nullam justo metus, luctus nec placerat lacinia, tincidunt at mauris. Praesent volutpat lacinia ex non semper.

Vivamus varius malesuada auctor. Sed consectetur eget purus cursus finibus. Curabitur pellentesque dolor a massa malesuada sollicitudin. Sed odio urna, molestie nec ornare in, suscipit imperdiet diam. In sagittis viverra eleifend. Aliquam non nulla elementum, pulvinar orci non, hendrerit eros. Suspendisse potenti. Praesent quam sem, tincidunt eu efficitur in, scelerisque nec odio. Vestibulum a arcu tortor.

Nulla vel dui tortor. Suspendisse mollis facilisis tellus ut rutrum. Curabitur fermentum varius felis, sed volutpat elit placerat id. Mauris volutpat purus eu tempus venenatis. Sed augue lacus, vestibulum ut sapien eget, maximus pellentesque ante. Fusce mattis sed justo sed malesuada. Duis et lorem id nulla accumsan fermentum. Donec pulvinar mauris risus, sit amet pellentesque nisi hendrerit at. Suspendisse potenti. Donec id tellus diam. Fusce eros nibh, pretium at purus a, malesuada rutrum ex. Nam quis ante neque. Praesent sed consequat turpis, sed vulputate odio. Suspendisse sem dolor, feugiat a gravida sed, mollis eu erat. Vivamus rhoncus lorem et fringilla cursus. Nam id urna nulla.

Maecenas id posuere magna, in convallis nulla. Maecenas nec tellus nunc. Integer sit amet vestibulum elit, quis convallis dui. Integer vitae ultricies nulla. Suspendisse molestie nulla quis velit sodales, a egestas metus aliquet. Duis viverra congue consequat. Vivamus tempor facilisis nulla, non pellentesque nisi. In a mauris eget turpis posuere hendrerit. Nulla egestas scelerisque orci blandit laoreet. Nunc auctor maximus nulla ac tincidunt. Nunc luctus, lectus in hendrerit congue, nisi elit iaculis lectus, id tincidunt augue magna sed mi.`
};


function Press() {
  return (
    <>
      <PageBanner title="Compra Minas, da Minasul, apresenta soluções para sua lavoura" breadcrumb="IMPRENSA" />
      <ArticleLayout article={articleData} />
      <LocationSection />
    </>
  );
}

export default Press;
