function myFunction() {
    let form = FormApp.openById('1HRmgsvj3Hev9YFRt6Ug3UeNIsLN9illbn4n5EN1nH9o');
  
    let emailVal = FormApp.createTextValidation()
    .setHelpText('Please enter valid email')
    .requireTextIsEmail()
    .build();
    
    
    let phoneVal = FormApp.createTextValidation().requireTextContainsPattern('[0-9\-]{10}')
    .setHelpText('Please enter valid US phone number')
    .build();
    
    for (let i = 0; i < 30; i++){
    form.addTextItem()
      .setTitle('Name');
    
  
    form.addTextItem()
      .setTitle('Phone no.')
    .setValidation(phoneVal);
    
    form.addTextItem()
      .setTitle('Email')
      .setValidation(emailVal);
    
    }
    
    //form.addMultipleChoiceItem()
  //    .setTitle('Do you prefer cats or dogs?')
  //.setChoiceValues(['Cats','Dogs'])
  //    .showOtherOption(true);
  // form.addPageBreakItem()
  //     .setTitle('Getting to know you');
  // form.addDateItem()
  //     .setTitle('When were you born?');
  // form.addGridItem()
  //     .setTitle('Rate your interests')
  //     .setRows(['Cars', 'Computers', 'Celebrities'])
  //     .setColumns(['Boring', 'So-so', 'Interesting']);
  //  Logger.log('Published URL: ' + form.getPublishedUrl());
  //  Logger.log('Editor URL: ' + form.getEditUrl());
  }
  
  function songs() {
    let form = FormApp.openById('1HRmgsvj3Hev9YFRt6Ug3UeNIsLN9illbn4n5EN1nH9o');
  
    let emailVal = FormApp.createTextValidation()
    .setHelpText('Please enter valid email')
    .requireTextIsEmail()
    .build();
    
    
    let phoneVal = FormApp.createTextValidation().requireTextContainsPattern('[0-9\-]{10}')
    .setHelpText('Please enter valid US phone number')
    .build();
    
    for (let i = 0; i < 15; i++){
    
      form.addTextItem()
        .setTitle('Artist Name');
      
      form.addSectionHeaderItem()
        .setTitle('Artist Primary Contact');
      
      form.addTextItem()
      .setTitle('Name');
    
      
    form.addTextItem()
      .setTitle('Phone no.')
    .setValidation(phoneVal);
    
    form.addTextItem()
      .setTitle('Email')
      .setValidation(emailVal);
      
    //Label
      
     
      form.addSectionHeaderItem()
        .setTitle('Label Info');
      
     form.addTextItem()
        .setTitle('Artist Label Name');
     
      form.addSectionHeaderItem()
        .setTitle('Label Primary Contact');
      
      
      form.addTextItem()
      .setTitle('Name');
    
      
    form.addTextItem()
      .setTitle('Phone no.')
    .setValidation(phoneVal);
    
    form.addTextItem()
      .setTitle('Email')
      .setValidation(emailVal);
      
    //Publisher
  
     form.addSectionHeaderItem()
        .setTitle('Publisher Info');
      
     form.addTextItem()
        .setTitle('Artist Publisher Name');
     
      form.addSectionHeaderItem()
        .setTitle('Publisher Primary Contact');
      
      
      form.addTextItem()
      .setTitle('Name');
    
      
    form.addTextItem()
      .setTitle('Phone no.')
    .setValidation(phoneVal);
    
    form.addTextItem()
      .setTitle('Email')
      .setValidation(emailVal);
      
      //writers
      form.addSectionHeaderItem()
        .setTitle('Writer(s) Info')
      .setHelpText('Please provide info for up to 10 writers');
                   
      for(let j=0; j<10;j++){
      form.addTextItem()
        .setTitle('Writer Name');
     
      form.addSectionHeaderItem()
        .setTitle('Writer Primary Contact');
      
      
      form.addTextItem()
      .setTitle('Name');
    
      
    form.addTextItem()
      .setTitle('Phone no.')
    .setValidation(phoneVal);
    
    form.addTextItem()
      .setTitle('Email')
      .setValidation(emailVal);
      } 
                   
      
    
    }
    
    //form.addMultipleChoiceItem()
  //    .setTitle('Do you prefer cats or dogs?')
  //.setChoiceValues(['Cats','Dogs'])
  //    .showOtherOption(true);
  // form.addPageBreakItem()
  //     .setTitle('Getting to know you');
  // form.addDateItem()
  //     .setTitle('When were you born?');
  // form.addGridItem()
  //     .setTitle('Rate your interests')
  //     .setRows(['Cars', 'Computers', 'Celebrities'])
  //     .setColumns(['Boring', 'So-so', 'Interesting']);
  //  Logger.log('Published URL: ' + form.getPublishedUrl());
  //  Logger.log('Editor URL: ' + form.getEditUrl());
  }
  
  function test(){
  
    let form = FormApp.openById('1HRmgsvj3Hev9YFRt6Ug3UeNIsLN9illbn4n5EN1nH9o');
    
    var item = form.addSectionHeaderItem();
    item.setTitle('Title of new section');
  
  }
  