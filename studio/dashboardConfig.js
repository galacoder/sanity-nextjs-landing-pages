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
                  buildHookId: '60c382d4ffb1815fe32a7727',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-o4cuznaa',
                  apiId: '2651c75a-277e-45b1-8b2f-c19415cd25c7'
                },
                {
                  buildHookId: '60c382d4606c0f5c4903aeb9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q7pttjvh',
                  apiId: '0126350a-d9e2-42fa-a08e-988e677f6877'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/onlineworld69/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q7pttjvh.netlify.app', category: 'apps'}
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
