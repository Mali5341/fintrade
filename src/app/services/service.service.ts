import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  cards() {
    return [
      {
        srNo: 1,
        cardType: 'Values',
        balance: 454.2
      },
      {
        srNo: 1,
        cardType: 'Invested',
        balance: 234.2
      },
      {
        srNo: 1,
        cardType: 'Multiple',
        balance: 524.2
      },

    ]
  }


  tableData() {
    return [
      { Company: 'Legacy Apps', investDate: '2002-12-12', invested: 1.0079, netValue: 12.1, multiple: 1.5 },
      { Company: 'Tech Innovations', investDate: '2010-05-25', invested: 2.345, netValue: 18.6, multiple: 2.1 },
      { Company: 'Global Solutions', investDate: '2005-09-17', invested: 3.678, netValue: 23.4, multiple: 1.8 },
      { Company: 'Future Ventures', investDate: '2018-03-08', invested: 4.901, netValue: 30.7, multiple: 2.3 },
      { Company: 'NextGen Technologies', investDate: '2015-11-20', invested: 5.234, netValue: 34.2, multiple: 2.5 },
      { Company: 'Innovate Labs', investDate: '2008-07-15', invested: 6.567, netValue: 40.5, multiple: 2.8 },
      { Company: 'Tech Solutions Ltd.', investDate: '2013-02-10', invested: 7.890, netValue: 45.9, multiple: 3.2 },
      { Company: 'Digital Innovations', investDate: '2004-06-30', invested: 8.123, netValue: 50.2, multiple: 3.6 },
      { Company: 'Dynamic Technologies', investDate: '2016-09-05', invested: 9.456, netValue: 56.3, multiple: 4.1 },
      { Company: 'Creative Solutions', investDate: '2019-12-18', invested: 10.789, netValue: 60.8, multiple: 4.5 },
      { Company: 'Innovative Systems', investDate: '2007-04-23', invested: 11.012, netValue: 65.4, multiple: 4.9 },
      { Company: 'Future Trends Ltd.', investDate: '2012-08-14', invested: 12.345, netValue: 70.1, multiple: 5.3 },
      { Company: 'Next Era Innovations', investDate: '2014-10-02', invested: 13.678, netValue: 75.6, multiple: 5.8 },
      { Company: 'Tech Forward Solutions', investDate: '2009-01-07', invested: 14.901, netValue: 80.3, multiple: 6.2 },
      { Company: 'Digital Dynamics', investDate: '2017-07-29', invested: 15.234, netValue: 85.7, multiple: 6.7 },
      { Company: 'Innovative Minds Ltd.', investDate: '2006-11-11', invested: 16.567, netValue: 90.2, multiple: 7.1 },
      { Company: 'NextGen Solutions', investDate: '2020-04-05', invested: 17.890, netValue: 95.4, multiple: 7.5 },
      { Company: 'Global Innovations', investDate: '2011-06-26', invested: 18.123, netValue: 100.8, multiple: 7.9 },
      { Company: 'Future Tech Ventures', investDate: '2003-03-14', invested: 19.456, netValue: 105.3, multiple: 8.3 },
      { Company: 'Dynamic Innovations Ltd.', investDate: '2018-08-09', invested: 20.789, netValue: 110.6, multiple: 8.7 }
    ]
  }

  activities() {
    return [
      { companyLogo: '../../assets/apple.jpeg', companyName: 'Apple', investment: 'APPL-$2,400,66B', profit: 152.48, average: +0.49 },
      { companyLogo: '../../assets/micro soft.png', companyName: 'Microsoft', investment: 'MSFT-$1,911,34B', profit: 261.53, average: -1.39 },
      { companyLogo: '../../assets/nvidia.png', companyName: 'Nvidia', investment: 'NVDA-$518,78B', profit: 213.75, average: +1.36 },
      { companyLogo: '../../assets/broadcom.png', companyName: 'Broadcom', investment: 'AVGO-$251,27B', profit: 607.54, average: +1.03 },
    ]
  }
  obligation() {
    return [
      { obligation: 'Mentals', endDate: 'End at 23-02-2023', Invest: 15.48, profit: 120.49, average: 82 },
      { obligation: 'Social Analytics', endDate: 'End at 12-08-2023', Invest: 18.48, profit: 1.53, average: 57, },
      { obligation: 'Action TVs', endDate: 'End at 29-10-2023', Invest: 85.48, profit: 113.75, average: 37 },
      { obligation: 'GoalScore', endDate: 'End at 17-11-2023', Invest: 112.48, profit: 57.54, average: 13 },
    ]
  }
}
