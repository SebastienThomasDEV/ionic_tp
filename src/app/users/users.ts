export const users = [
  {
    id: 1,
    email: 'johndoe@mail.com',
    password: '123456',
    feeds: [
      {
        source: 'Le Monde informatique',
        fluxs: [
          {
            url: 'https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Fservices-it%2Frss.xml',
            subject: 'Services IT',
            subscribed: false
          },
          {
            url: 'https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Freseaux%2Frss.xml',
            subject: 'Réseaux',
            subscribed: false
          },
          {
            url: 'https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Fstockage%2Frss.xml',
            subject: 'Stockage',
            subscribed: false
          },
          {
            url: 'https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Fos%2Frss.xml',
            subject: 'OS',
            subscribed: false
          },
          {
            url: 'https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Fsecurite%2Frss.xml',
            subject: 'Sécurité',
            subscribed: true
          }
        ]
      },
      {
        source: 'Le Monde',
        fluxs: [
          {
            url: 'https%3A%2F%2Fwww.lemonde.fr%2Fm-actu%2Frss_full.xml',
            subject: 'Actualité',
            subscribed: true
          },
          {
            url: 'https%3A%2F%2Fwww.lemonde.fr%2Fm-actu%2Frss_full.xml',
            subject: 'Politique',
            subscribed: false
          },
          {
            url: 'https%3A%2F%2Fwww.lemonde.fr%2Fm-actu%2Frss_full.xml',
            subject: 'International',
            subscribed: false
          },
          {
            url: 'https%3A%2F%2Fwww.lemonde.fr%2Fm-actu%2Frss_full.xml',
            subject: 'Société',
            subscribed: false
          }
        ]
      }
    ]
  },
  {
    id: 2,
    email: 'janedoe@mail.com',
    password: '123456',
    feeds: [
      {
        source: 'Le Monde informatique',
        fluxs: [
          {
            url: 'https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Fservices-it%2Frss.xml',
            subject: 'Services IT',
            subscribed: false
          },
          {
            url: 'https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Freseaux%2Frss.xml',
            subject: 'Réseaux',
            subscribed: true
          },
          {
            url: 'https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Fstockage%2Frss.xml',
            subject: 'Stockage',
            subscribed: false
          },
          {
            url: 'https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Fos%2Frss.xml',
            subject: 'OS',
            subscribed: true
          },
          {
            url: 'https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Fsecurite%2Frss.xml',
            subject: 'Sécurité',
            subscribed: false
          }
        ]
      }
    ]
  }
];
