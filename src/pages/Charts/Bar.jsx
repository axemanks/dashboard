import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Inflation Rate in percentage" />
      <div className="w-full">
        <ChartComponent
          id="bar-charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;