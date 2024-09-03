function findValueByKey(companyName, company) {
    if (company.name === companyName) {
      return company;
    }
  
    if (company.clients) {
      for (let client of company.clients) {
        const result = findValueByKey(companyName, client);
        if (result) {
          return result;
        }
      }
    }

    return null;
  }
  
  const result = findValueByKey('Клієнт 1.2.3', company);
  console.log(result);
  