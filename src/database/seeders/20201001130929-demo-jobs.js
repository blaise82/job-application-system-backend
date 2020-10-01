export default {
  up: (queryInterface) => queryInterface.bulkInsert('Jobs', [
    {
      id: 'd0a061d9-447a-49a8-aebc-7e1b031afd62',
      title: 'Site Manager Controlgear Instramac Rwanda Ltd Kigali',
      description: "How to apply: All interested candidates to send email to Tracy@jlpp.co.za",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'd0a011d9-467a-49a8-aebc-7e1b031afd62',
      title: 'Registrar Of Permit at Rwanda Mines, Petroleum And Gas Board',
      description: "How to apply: All interested candidates to send email to Tracy@jlpp.co.za",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'd0a021d9-447a-49a8-aebc-7e1b031afd62',
      title: 'CMU-Africa - Teaching Faculty Positions (KIGALI)',
      description: "How to apply: All interested candidates to send email to Tracy@jlpp.co.za",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'd0a031d9-447a-46a8-aebc-7e1b031afd62',
      title: 'Mantainance of Zonal Offices',
      description: "How to apply: All interested candidates to send email to Tracy@jlpp.co.za",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'd0a041d9-447a-49a8-aebc-6e1b031afd62',
      title: 'Mantainance of Zonal Offices 2',
      description: "How to apply: All interested candidates to send email to Tracy@jlpp.co.za",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'd0a061d9-447a-49a8-aebc-7e1b036afd62',
      title: 'Rwanda: Health Finance Director',
      description: "How to apply: All interested candidates to send email to Tracy@jlpp.co.za",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'd0a071d9-447a-49a8-aebc-7e1b061afd62',
      title: 'Media editor in Chief at Pax Press',
      description: "How to apply: All interested candidates to send email to Tracy@jlpp.co.za",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'd0a081d9-447a-49a8-aebc-7e1b031afd62',
      title: '(TOR) Human Resource Information System Software',
      description: "How to apply: All interested candidates to send email to Tracy@jlpp.co.za",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Jobs', null, {})
};
