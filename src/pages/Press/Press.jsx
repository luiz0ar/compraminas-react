import React, { useState, useEffect } from 'react';
import PageBanner from '../../components/PageBanner/PageBanner.jsx';
import ArticleLayout from '../../components/PressSection/PressSection.jsx';
import LocationSection from '../../components/LocationSection/LocationSection.jsx';
import api from '../../api/api';

function Press() {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchPressContent() {
      try {
        const response = await api.get('/press-content');
        setArticle(response.data);
      } catch (error) {
        console.error("Erro ao buscar conteúdo de imprensa:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPressContent();
  }, []);

  if (isLoading) {
    return <PageBanner title="Carregando..." breadcrumb="IMPRENSA" />;
  }
  if (!article) {
    return <PageBanner title="Artigo não encontrado" breadcrumb="IMPRENSA" />;
  }

  return (
    <>
      <PageBanner title={article.title} breadcrumb="IMPRENSA" />
      <ArticleLayout article={article} />
      <LocationSection />
    </>
  );
}

export default Press;
