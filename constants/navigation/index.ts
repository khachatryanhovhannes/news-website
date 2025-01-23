const NAVIGATION = [
  {
    label: "Գլխավոր",
    path: "/",
  },
  {
    label: "Նորություններ",
    path: "/news",
    child: [
      {
        label: "Հայկական",
        path: "/news/armenian",
        child: [
          {
            label: "Ստարտափներ",
            path: "/news/armenian/startups",
          },
          {
            label: "Հիմնադիրներ",
            path: "/news/armenian/founders",
          },
        ],
      },
      {
        label: "Համաշխարհային",
        path: "/news/global",
        child: [
          {
            label: "Կազմակերպություններ",
            path: "/news/global/organizations",
          },
          {
            label: "Տեխ Լիդերներ",
            path: "/news/global/tech-leaders",
          },
          {
            label: "Ստարտափներ",
            path: "/news/global/startups",
          },
        ],
      },
    ],
  },
  {
    label: "Դասընթացներ",
    path: "/courses",
    icon: "courses",
    child: [
      {
        label: "Անհատներ",
        path: "/courses/individuals",
      },
      {
        label: "Կազմակերպություններ",
        path: "/courses/organizations",
      },
    ],
  },
  {
    label: "Միջոցառումներ",
    path: "/events",
  },
  {
    label: "Մեր Մասին",
    path: "/about",
    child: [
      {
        label: "Կապ",
        path: "/about/contact",
      },
      {
        label: "Թիմ",
        path: "/about/team",
      },
      {
        label: "Օգտագործման Պայմաններ",
        path: "/about/terms",
      },
    ],
  },
  {
    label: "Ռեսուրսներ",
    path: "/resources",
    child: [
      {
        label: "AI Tools",
        path: "/resources/ai-tools",
      },
      {
        label: "Ուսումնական ռեսուրսներ",
        path: "/resources/educational-resources",
      },
      {
        label: "Օգտակար Գործիքներ",
        path: "/resources/tools",
      },
    ],
  },
];

export default NAVIGATION;
