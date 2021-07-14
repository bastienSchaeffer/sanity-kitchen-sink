export default {
  widgets: [
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
                  buildHookId: '60ef18ba9d051412b0617394',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-58vv5jg1',
                  apiId: '15556166-8985-4322-a253-d6347349ae95'
                },
                {
                  buildHookId: '60ef18ba7d33a612a096e189',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hux6jnqu',
                  apiId: '11bf04c3-84a9-4748-b190-43334b078c48'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bastienSchaeffer/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hux6jnqu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
