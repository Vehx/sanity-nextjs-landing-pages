export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f48eef30911a1901f38a2b3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tp148dik',
                  apiId: '0e864e8b-9fbb-4968-9735-7918d3c6bc3d'
                },
                {
                  buildHookId: '5f48eef331bda86e36eca6f9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vzp1kxiq',
                  apiId: '6d7e7b45-1c7b-463a-8934-321d96c3d785'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Vehx/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vzp1kxiq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
