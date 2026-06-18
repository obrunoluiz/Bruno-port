(() => {
  const clean = (value) => value.replace(/\s+/g, " ").trim();
  const setWidget = (id, html) => {
    const widget = document.querySelector(`[data-id="${id}"] .elementor-widget-container`);
    if (widget) widget.innerHTML = html;
  };

  const replacements = new Map([
    ["Curso mais completo de WebDesign", "UMA AMOSTRA DO MEU TRABALHO"],
    ["Aprenda do Zero", "Landing Pages"],
    ["O Mercado Mais Bem Pago do Design", "Identidade Visual"],
    ["Zero programação", "Campanhas"],
    ["O seu próximo passo", "Design para Marketing"],
    ["Do design à página publicada", "Web Design & IA"],
    ["O NoCode Pages é pra você que...", "ESTRATÉGIA PARA CADA DESAFIO"],
    ["NUNCA CRIOU UMA PÁGINA NA VIDA", "GERAR VENDAS"],
    ["Já é designer e quer dar o próximo passo", "FORTALECER AUTORIDADE"],
    ["QUER ENTRAR NO MERCADO MAIS BEM PAGO DO DESIGN", "CRIAR POSICIONAMENTO"],
    ["Dá pra ganhar dinheiro com Landing Pages?", "PROJETOS PARA MARCAS E NEGÓCIOS QUE BUSCAM CRESCER"],
    ["A resposta é sim — e os dados da Kiwify e Hotmart comprovam.", "Design, marketing e execução trabalhando juntos para gerar impacto."],
    ["Você vai aprender a criar essas páginas", "PROJETOS EM DESTAQUE"],
    ["Olha tudo que você vai ter acesso:", "DESIGN. MARKETING. IMPLEMENTAÇÃO."],
    ["Suporte para dúvidas", "Planejamento"],
    ["Atualizações & Novas Aulas", "Design"],
    ["Comunidade de Alunos", "Conversão"],
    ["I.A Para criação de COPY", "Desenvolvimento"],
    ["Modelos de Páginas", "Publicação"],
    ["Bônus Exclusivos", "Estratégia"],
    ["Confira alguns projetos completos que você vai aprender a criar do absoluto zero", "UMA SELEÇÃO DE TRABALHOS PARA DIFERENTES OBJETIVOS E SEGMENTOS"],
    ["Projetos completos: design + implementação, tudo detalhado passo a passo pra você criar páginas de alto nível.", "Cada projeto foi pensado para resolver problemas reais de comunicação, posicionamento e crescimento."],
    ["BÔNUS EXCLUSIVOS", "O QUE ME DIFERENCIA"],
    ["pack de páginas Exclusivas", "VISÃO DE NEGÓCIO"],
    ["arsenal de códigos", "TECNOLOGIA & IA"],
    ["curso design agora 2.0", "EXECUÇÃO COMPLETA"],
    ["ACESSO VITALÍCIO", "PROCESSO ESTRATÉGICO"],
    ["6 Meses de acesso", "MAIS EFICIÊNCIA"],
    ["Por que aprender Web Design?", "DESIGN COM VISÃO DE NEGÓCIO"],
    ["O mercado paga {muito} bem", "Marketing & Posicionamento"],
    ["Poucos sabem fazer direito", "Experiência & Conversão"],
    ["Você se torna completo", "Tecnologia & Inteligência Artificial"],
    ["Curso Completo {No Code Pages}", "VAMOS CRIAR ALGO QUE GERE RESULTADOS"],
    ["Acesso vitalício", "Estratégia"],
    ["Certificado Web Designer", "Design"],
    ["Suporte Individual", "Implementação"],
    ["POR 12X", "MAIS QUE"],
    ["R$ 51,40", "DESIGN"],
    ["OU 497,00 Á VISTA", "RESULTADO PARA O SEU NEGÓCIO"],
    ["Entre sem medo e decida depois.", "ESTRATÉGIA PARA CADA DESAFIO"],
    ["Olá, prazer", "POR TRÁS DE CADA PROJETO"],
    ["Sou o Gustavo Hirt", "IDEIAS QUE VIRAM EXPERIÊNCIAS"],
    ["Certificado de Conclusão", "O QUE DIZEM SOBRE O MEU TRABALHO"],
    ["Ficou com alguma dúvida?", "FAQ"],
    ["Relaxa, a gente resolve agora!", "Tire suas dúvidas sobre meu trabalho."],
    ["WhatsApp", "Vamos conversar"],
    ["Mandar mensagem", "Iniciar projeto"],
    ["Copyright © 2025. Gustavo Hirt Todos direitos reservados CNPJ 40.725.105/0001-22", "Copyright © 2026. Bruno Luiz. Todos os direitos reservados."]
  ]);

  const paragraphs = new Map([
    ["Não importa se nunca abriu o Figma, Photoshop ou Elementor. A gente pega na sua mão e te leva do básico até publicar sua primeira página.", "Landing pages e experiências digitais focadas em conversão, posicionamento e experiência do usuário."],
    ["Toda empresa, lançamento e marca precisa de alguém que crie sites bonitos e que funcionam. E aqui tá o ponto: é um dos setores que mais pagam dentro do design. Enquanto muita gente ainda se prende a post de Instagram, você aprende a criar algo que gera resultado real e é muito mais valorizado.", "Identidades visuais construídas para fortalecer marcas, comunicar valor e criar reconhecimento."],
    ["Chega de achar que precisa ser programador. Você vai aprender a criar páginas fodas sem escrever uma única linha de código.", "Campanhas e peças que conectam estratégia, mensagem e direção visual para gerar impacto."],
    ["Se você é da área do Design (ou quer entrar) o Web Design é o melhor caminho: menos concorrência, mais valor e os projetos mais bem pagos do mercado.", "Design aplicado ao marketing para transformar objetivos de negócio em comunicação clara e relevante."],
    ["Aqui você aprende todo o processo de Web Designer: Desde a criação do Layout até a implementação da página online. Nada de ficar perdido entre mil tutoriais é o caminho direto pra virar Web Designer completo.", "Do planejamento à publicação: estratégia, interface, tecnologia e inteligência artificial no mesmo processo."],
    ["Mesmo que você nunca tenha aberto o Figma, o Photoshop ou o Elementor, o NoCode Pages te ensina do zero a criar páginas completas, profissionais e simplesmente F#DAS.", "Alguns projetos precisam gerar vendas. Cada decisão visual é orientada para reduzir atritos e conduzir pessoas à ação."],
    ["Chega de achar que Design é só criar Posts, carrosséis para o Instagram... Aqui você vai aprender a criar Páginas, Sites, Landing Pages, sem programar e agregando muito mais valor pros seus projetos e clientes.", "Outros precisam fortalecer autoridade. O design organiza a percepção da marca e torna sua proposta mais clara e confiável."],
    ["O Web Design é uma das áreas mais valorizadas hoje. Aqui você aprende a se destacar, cobrar mais e entregar projetos que chamam atenção de verdade.", "Outros precisam criar posicionamento. Meu papel é transformar objetivos de negócio em experiências que façam sentido para quem compra."],
    ["Criar páginas é uma das habilidades mais valorizadas no design. Empresas, Infoprodutores, Profissionais... pagam muito bem para criação de Páginas Profissionais e poucos dominam isso de verdade.", "Conecto marketing, experiência do usuário e posicionamento para que o visual trabalhe a favor dos objetivos do negócio."],
    ["A maioria dos designers ainda vive de posts e identidade visual. Poucos entendem o mercado de páginas, acham que é difícil, ou que precisa programar. o NO CODE PAGES vai mudar isso.)", "Cada interface é pensada para comunicar com clareza, facilitar decisões e transformar atenção em ação."],
    ["Sabe os clientes que você já tem? Muitos deles precisam de sites e páginas, e você pode ser quem entrega tudo isso. Chega de deixar dinheiro na mesa", "Tecnologia e inteligência artificial aceleram processos, ampliam possibilidades e tornam a execução mais eficiente."],
    ["Nossa garantia é simples: você tem 7 dias inteiros pra explorar o curso, assistir às aulas e testar o conteúdo. Se nesse período você sentir que o No Code Pages não é pra você, devolvemos 100% do seu investimento, sem burocracia, sem perguntas.", "Cada projeto possui um objetivo diferente. Investigo o desafio, defino a direção e construo uma solução visual alinhada ao negócio e às pessoas."],
    ["Finalize o curso e receba um certificado oficial comprovando suas habilidades. Um reconhecimento que você pode mostrar em portfólios, LinkedIn e clientes para destacar seu nível profissional.", "Depoimentos de clientes, parceiros e empresas que confiaram no meu processo criativo e estratégico."],
    ["Se não encontrar sua resposta aqui, é só chamar no WhatsApp que a gente te ajuda rapidinho.", "Se ainda quiser entender melhor o processo, entre em contato e vamos conversar sobre o seu projeto."]
  ]);

  const replaceTextNodes = (map) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const key = clean(node.nodeValue);
      if (map.has(key)) node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), map.get(key));
    });
  };

  setWidget("5fe03de9", '<h2 class="elementor-heading-title elementor-size-default">DESIGN QUE VAI <br class="copy-mobile-break"><span class="gradienteidv">ALÉM DA ESTÉTICA.</span></h2>');
  setWidget("1ce18d7", '<h2 class="elementor-heading-title elementor-size-default">Crio experiências digitais que unem <br class="copy-mobile-break">estratégia, design e tecnologia para <br class="copy-mobile-break">transformar ideias em resultados.<br><small>Designer Estratégico • Web Designer <br class="copy-mobile-break">• Marketing Digital</small></h2>');
  setWidget("2f0b990", '<h2 class="elementor-heading-title elementor-size-default">ESTRATÉGIA PARA <span class="gradienteidvv2">CADA DESAFIO</span></h2>');
  setWidget("1ba0e33e", '<h2 class="elementor-heading-title elementor-size-default">PROJETOS EM <span class="gradienteidvv2">DESTAQUE</span></h2>');
  setWidget("ed1d824", '<h2 class="elementor-heading-title elementor-size-default">UMA SELEÇÃO DE TRABALHOS PARA <span class="gradienteidvv2">DIFERENTES OBJETIVOS E SEGMENTOS</span></h2>');
  setWidget("b61b0ab", '<h2 class="elementor-heading-title elementor-size-default">DESIGN COM <span class="gradienteidvv2">VISÃO DE NEGÓCIO</span></h2>');
  replaceTextNodes(replacements);
  replaceTextNodes(paragraphs);

  document.querySelectorAll(".elementor-button-text").forEach((button) => {
    const label = clean(button.textContent).toLowerCase();
    if (label.includes("quero me inscrever")) button.textContent = "VER PROJETOS";
    if (label.includes("garantir minha vaga")) button.textContent = "INICIAR PROJETO";
  });

  const about = document.querySelector('[data-id="13a5f852"] .elementor-widget-container');
  if (about) about.innerHTML = "<p>Uma visão do meu processo criativo, das decisões estratégicas e da forma como transformo ideias em experiências digitais.</p><p>Não entrego apenas layouts. Participo da construção completa: planejamento, design, conversão, desenvolvimento e publicação.</p><p>O resultado é um processo mais estratégico, eficiente e alinhado aos objetivos do negócio.</p>";

  const faq = [
    ["O que você faz exatamente?", "Desenvolvo soluções visuais para marcas, campanhas e produtos digitais, combinando design, marketing e tecnologia."],
    ["Você cria sites?", "Sim. Desenvolvo landing pages e experiências digitais focadas em conversão, posicionamento e experiência do usuário."],
    ["Trabalha apenas com design?", "Não. Minha atuação envolve estratégia, experiência do usuário, marketing, design e implementação."],
    ["Utiliza IA nos projetos?", "Sim. Utilizo inteligência artificial para acelerar processos, explorar possibilidades e aumentar a eficiência criativa."]
  ];
  const titles = document.querySelectorAll(".elementor-tab-title, .e-n-accordion-item-title-text");
  const contents = document.querySelectorAll(".elementor-tab-content, .e-n-accordion-item > div[role='region']");
  faq.forEach(([question, answer], index) => {
    if (titles[index]) titles[index].textContent = question;
    if (contents[index]) contents[index].innerHTML = `<p>${answer}</p>`;
  });
  document.title = "Bruno Luiz | Designer Estratégico e Web Designer";
})();
