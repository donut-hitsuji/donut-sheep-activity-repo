(() => {
  const STORAGE_KEY = 'donut-sheep-language';
  const GOOGLE_ADS_CONVERSION_SEND_TO = {
    youtube: 'AW-18249571296/Hz7HCKe55uocEOC3if5D',
    streaming: 'AW-18249571296/Hz7HCKe55uocEOC3if5D',
    x: 'AW-18249571296/9BgfCL3-0-scEOC3if5D',
  };

  const translations = {
    ja: {
      pageTitle: 'donut sheep — 今日の一枚から、次の物語へ。',
      metaDescription: 'どーなつひつじの常設ポータル。Xのイラストと先行公開、YouTubeのMV、各種配信ストアの音楽をひとつの場所から。',
      ogLocale: 'ja_JP',
      ogDescription: 'イラスト、MV、音楽リリース。どーなつひつじの創作世界への三つの入口。',
      twitterDescription: 'X、YouTube、音楽配信。どーなつひつじの創作世界への三つの入口。',
      skipLink: '本文へ移動',
      brandHomeLabel: 'donut sheep トップへ',
      navChannels: '三つの入口',
      navStreaming: '音楽配信',
      navYouTubeCta: 'YouTubeを観る',
      heroTitle: '<span>今日の一枚から、</span><br><em>次の物語へ。</em>',
      heroLead: 'どーなつひつじは、音楽とイラストから小さな世界をつくっています。日々の断片はXへ、物語になった音はYouTubeへ、完成した曲は配信ストアへ。',
      heroWatch: 'MVを観る',
      heroX: '今日のポスト',
      heroArtistPage: 'アーティストページ',
      factsLabel: '活動概要',
      galleryLabel: 'ドナ・メルシープのイラストギャラリー',
      donaMultiverseAlt: '色鮮やかな電脳空間にいる羊娘ドナ・メルシープ',
      donaNoteAlt: 'ノートの中で眠そうに頬杖をつくドナ・メルシープ',
      donaSignalAlt: 'モニターの中からキャンディーを差し出すドナ・メルシープ',
      scrollCue: '三つの入口',
      channelsTitle: 'この世界への、<br><em>三つの入口。</em>',
      channelsLead: '入口は三つ。どこから入っても、同じ世界の別の景色につながっています。',
      channelYouTubeTitle: 'MVと音楽を<br>映像で観る',
      channelYouTubeLead: '物語になった音の居場所。',
      channelXTitle: '日々のポストと<br>イラスト',
      channelXLead: '音楽の先行公開も、ここから。',
      channelStreamingTitle: '好きな場所で<br>音楽を聴く',
      channelStreamingLead: '各種ストアへTuneCoreから。',
      youtubeTitle: '音が、<br><em>物語になる場所。</em>',
      youtubeLead: 'フルMVと音楽をYouTubeで公開しています。気になった一場面から、少し長い旅へ。',
      youtubeAll: 'すべての動画を見る',
      askRainFrameTitle: 'Ask the Rain ミュージックビデオ',
      askRainDescription: '雨音の向こうへ、問いかける歌。',
      biteFrameTitle: 'Bite Through the Frame ミュージックビデオ',
      biteDescription: 'フレームを噛み破って、画面の外へ。',
      liliesFrameTitle: 'The Lilies Arrived on Time ミュージックビデオ',
      liliesDescription: '百合が間に合った、その瞬間の物語。',
      youtubeProof: '「RISE, RISE」は<strong>10万回再生</strong>を越えました。<br>見つけてくれた一人ひとりへ、ありがとう。',
      watchRise: 'RISE, RISEを観る',
      xTitle: '日々の熱は、<br><em>いちばん早くXへ。</em>',
      xLead: 'イラスト、短い日記、できたての音。完成する前の鼓動も、その日のまま置いています。',
      sheepDiary: 'ひつじ日記',
      xMore: 'Xでもっと見る',
      streamingTitle: '好きな景色へ、<br><em>音楽を連れていく。</em>',
      streamingLead: 'リリース作品は、いつもの音楽サービスから。ジャケットの向こうに、それぞれ違う世界が待っています。',
      allReleases: '配信作品の一覧へ',
      drawStarsAlt: 'DRAW THE STARS ジャケット',
      middleReleaseUrl: 'https://linkco.re/3hMCvhb0?lang=ja',
      middleReleaseImage: 'assets/release-art/OLAK5uy_lbgqALKTdUGuzrY-7KMrXE81p32pK1Hj0.jpg',
      middleReleaseAlt: '水星のパジャマ ジャケット',
      middleReleaseTitle: '水星のパジャマ',
      sunsetAlt: 'SUNSET TERMINAL 4039 ジャケット',
      storeGuide: '曲ページから各種配信ストアを選べます。',
      artistPageButton: 'アーティストページを見る',
      closingDonaAlt: 'こちらを見つめるドナ・メルシープ',
      closingTitle: 'また、<br>次の世界で。',
      closingLead: '今日も何かをつくっています。<br>好きな入口から、また会いに来てください。',
      closingArtistPage: '配信作品一覧',
      languageSwitchLabel: 'View the English version',
      menuOpen: 'メニューを開く',
      menuClose: 'メニューを閉じる',
      musicPlayLabel: 'MAKE ME MOREを再生',
      musicPauseLabel: 'MAKE ME MOREを一時停止',
      musicVolumeLabel: 'MAKE ME MOREの音量',
      nowPlaying: 'NOW PLAYING',
    },
    en: {
      pageTitle: 'donut sheep — A sketch today. A world tomorrow.',
      metaDescription: 'The permanent portal for donut sheep: daily illustrations and early music on X, music videos on YouTube, and released songs across streaming services.',
      ogLocale: 'en_US',
      ogDescription: 'Illustration, music videos, and streaming releases. Three ways into the world of donut sheep.',
      twitterDescription: 'X, YouTube, and music streaming. Three ways into the world of donut sheep.',
      skipLink: 'Skip to content',
      brandHomeLabel: 'Back to the donut sheep home page',
      navChannels: 'Three ways in',
      navStreaming: 'Streaming',
      navYouTubeCta: 'Watch on YouTube',
      heroTitle: '<span>A sketch today.</span><br><em>A world tomorrow.</em>',
      heroLead: 'donut sheep builds small worlds from music and illustration. Daily fragments appear on X, songs become stories on YouTube, and finished releases travel to streaming services.',
      heroWatch: 'Watch MVs',
      heroX: 'Today on X',
      heroArtistPage: 'Artist page',
      factsLabel: 'At a glance',
      galleryLabel: 'Illustration gallery featuring Dona Mer-Sheep',
      donaMultiverseAlt: 'Dona Mer-Sheep in a vivid cyber world',
      donaNoteAlt: 'A sleepy Dona Mer-Sheep leaning inside a notebook frame',
      donaSignalAlt: 'Dona Mer-Sheep offering candy from inside a wall of monitors',
      scrollCue: 'THREE WAYS IN',
      channelsTitle: 'Three ways<br><em>into this world.</em>',
      channelsLead: 'Each door opens onto a different view of the same world. Start wherever you like.',
      channelYouTubeTitle: 'Watch music<br>become a story',
      channelYouTubeLead: 'Where sound finds its moving image.',
      channelXTitle: 'Daily posts &amp;<br>illustrations',
      channelXLead: 'Early music previews live here too.',
      channelStreamingTitle: 'Take the music<br>with you',
      channelStreamingLead: 'Available across streaming services.',
      youtubeTitle: 'Where sound<br><em>becomes story.</em>',
      youtubeLead: 'Full music videos and songs live on YouTube. Let one scene pull you into a longer journey.',
      youtubeAll: 'See every video',
      askRainFrameTitle: 'Ask the Rain music video',
      askRainDescription: 'A question carried beyond the rain.',
      biteFrameTitle: 'Bite Through the Frame music video',
      biteDescription: 'Break the frame. Step beyond the screen.',
      liliesFrameTitle: 'The Lilies Arrived on Time music video',
      liliesDescription: 'The story of the moment the lilies made it.',
      youtubeProof: '<strong>RISE, RISE</strong> has passed <strong>100K views.</strong><br>Thank you to everyone who found it.',
      watchRise: 'Watch RISE, RISE',
      xTitle: 'The first spark<br><em>lands on X.</em>',
      xLead: 'Illustrations, short notes, and freshly made music—including the pulse before a piece is finished. Posts are written mainly in Japanese.',
      sheepDiary: 'Sheep diary',
      xMore: 'See more on X',
      streamingTitle: 'Carry the music<br><em>into your view.</em>',
      streamingLead: 'Released songs are ready on your usual music service. A different world waits behind every cover.',
      allReleases: 'Browse all releases',
      drawStarsAlt: 'DRAW THE STARS cover art',
      middleReleaseUrl: 'https://linkco.re/pT9AAbZy?lang=ja',
      middleReleaseImage: 'assets/release-art/itd1927435.png',
      middleReleaseAlt: 'Meh Accepted cover art',
      middleReleaseTitle: 'Meh Accepted',
      sunsetAlt: 'SUNSET TERMINAL 4039 cover art',
      storeGuide: 'Choose your streaming service from each song page.',
      artistPageButton: 'View artist page',
      closingDonaAlt: 'Dona Mer-Sheep looking toward the viewer',
      closingTitle: 'See you in<br>the next world.',
      closingLead: 'Something new is taking shape today.<br>Come back through whichever door you like.',
      closingArtistPage: 'Release catalog',
      languageSwitchLabel: '日本語版を見る',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      musicPlayLabel: 'Play MAKE ME MORE',
      musicPauseLabel: 'Pause MAKE ME MORE',
      musicVolumeLabel: 'MAKE ME MORE volume',
      nowPlaying: 'NOW PLAYING',
    },
  };

  const header = document.querySelector('[data-header]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const languageSwitch = document.querySelector('[data-language-switch]');
  const year = document.querySelector('[data-year]');
  const audioPlayer = document.querySelector('[data-audio-player]');
  const audio = document.querySelector('[data-audio]');
  const audioToggle = document.querySelector('[data-audio-toggle]');
  const audioVolume = document.querySelector('[data-audio-volume]');
  let audioToastTimer = null;

  const getLanguage = () => document.documentElement.lang === 'en' ? 'en' : 'ja';
  const getCopy = () => translations[getLanguage()];

  const updateMenuLabel = () => {
    if (!navToggle) return;
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-label', isOpen ? getCopy().menuClose : getCopy().menuOpen);
  };

  const closeNav = () => {
    if (!navToggle || !nav) return;
    navToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    updateMenuLabel();
  };

  const syncAudioControls = () => {
    if (!audio || !audioToggle || !audioPlayer) return;
    const isPlaying = !audio.paused;
    audioPlayer.classList.toggle('is-playing', isPlaying);
    audioToggle.setAttribute('aria-pressed', String(isPlaying));
    audioToggle.setAttribute('aria-label', isPlaying ? getCopy().musicPauseLabel : getCopy().musicPlayLabel);
    if (!isPlaying) {
      window.clearTimeout(audioToastTimer);
      audioPlayer.classList.remove('show-track-toast');
    }
  };

  const showAudioToast = () => {
    if (!audioPlayer) return;
    window.clearTimeout(audioToastTimer);
    audioPlayer.classList.remove('show-track-toast');
    window.requestAnimationFrame(() => audioPlayer.classList.add('show-track-toast'));
    audioToastTimer = window.setTimeout(() => audioPlayer.classList.remove('show-track-toast'), 3200);
  };

  const applyLanguage = (language, persist = false) => {
    const nextLanguage = language === 'en' ? 'en' : 'ja';
    const copy = translations[nextLanguage];
    document.documentElement.lang = nextLanguage;
    document.documentElement.dataset.language = nextLanguage;
    document.body.classList.remove('lang-ja', 'lang-en');
    document.body.classList.add(`lang-${nextLanguage}`);
    document.title = copy.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = copy[element.dataset.i18n];
      if (value !== undefined) element.innerHTML = value;
    });

    const attributeBindings = {
      content: 'i18nContent',
      'aria-label': 'i18nAriaLabel',
      title: 'i18nTitle',
      alt: 'i18nAlt',
      href: 'i18nHref',
      src: 'i18nSrc',
    };

    Object.entries(attributeBindings).forEach(([attribute, datasetKey]) => {
      document.querySelectorAll(`[data-i18n-${attribute}]`).forEach((element) => {
        const value = copy[element.dataset[datasetKey]];
        if (value !== undefined) element.setAttribute(attribute, value);
      });
    });

    document.querySelectorAll('blockquote.twitter-tweet').forEach((quote) => {
      quote.dataset.lang = nextLanguage;
    });

    if (languageSwitch) {
      const targetLanguage = nextLanguage === 'ja' ? 'en' : 'ja';
      languageSwitch.textContent = targetLanguage.toUpperCase();
      languageSwitch.lang = targetLanguage;
      languageSwitch.setAttribute('aria-label', copy.languageSwitchLabel);
    }

    updateMenuLabel();
    syncAudioControls();

    if (persist) {
      try { window.localStorage.setItem(STORAGE_KEY, nextLanguage); } catch (_) {}
    }
  };

  const syncHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  const getOutboundChannel = (hostname) => {
    if (hostname === 'x.com' || hostname.endsWith('.x.com')) return 'x';
    if (hostname.includes('youtube.com') || hostname.includes('youtu.be')) return 'youtube';
    if (hostname === 'linkco.re' || hostname.endsWith('.linkco.re')) return 'streaming';
    if (hostname.includes('tunecore.co.jp')) return 'streaming';
    return null;
  };

  const trackOutboundClick = (link) => {
    if (typeof window.gtag !== 'function') return;
    const destination = new URL(link.href, window.location.href);
    const channel = getOutboundChannel(destination.hostname);
    if (!channel) return;

    window.gtag('event', 'outbound_click', {
      event_category: 'engagement',
      event_label: channel,
      outbound_channel: channel,
      link_url: destination.href,
      link_domain: destination.hostname,
      link_text: (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120),
      page_language: getLanguage(),
    });

    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONVERSION_SEND_TO[channel],
    });
  };

  if (audio && audioToggle && audioVolume) {
    audio.volume = Number(audioVolume.value);
    audio.pause();
    syncAudioControls();

    audioToggle.addEventListener('click', async () => {
      if (!audio.paused) {
        audio.pause();
        return;
      }

      try {
        await audio.play();
        showAudioToast();
      } catch (_) {
        syncAudioControls();
      }
    });

    audioVolume.addEventListener('input', () => {
      audio.volume = Number(audioVolume.value);
      audio.muted = false;
    });

    audio.addEventListener('play', syncAudioControls);
    audio.addEventListener('pause', syncAudioControls);
  }

  applyLanguage(document.documentElement.dataset.language || document.documentElement.lang);

  if (languageSwitch) {
    languageSwitch.addEventListener('click', () => {
      applyLanguage(getLanguage() === 'ja' ? 'en' : 'ja', true);
      closeNav();
    });
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';
      navToggle.setAttribute('aria-expanded', String(willOpen));
      nav.classList.toggle('is-open', willOpen);
      document.body.classList.toggle('nav-open', willOpen);
      updateMenuLabel();
    });

    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) closeNav();
    });
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (link) trackOutboundClick(link);
  });

  window.addEventListener('scroll', syncHeader, { passive: true });
  syncHeader();

  window.addEventListener('load', () => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (target) window.setTimeout(() => target.scrollIntoView({ block: 'start' }), 80);
  }, { once: true });

  if (year) year.textContent = String(new Date().getFullYear());
})();
