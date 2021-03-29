import React, { useState, useEffect } from 'react';
import Flow from '@/Flow';
import { Model } from '@antv/x6';
import dataCell from './data';

export default () => {
  const [data, setData] = useState<Model.FromJSONData>({nodes: [], edges: []})

  useEffect(() => {
    setData(dataCell)
  }, [])

  return (
    <Flow
      data={dataCell}
    >
    </Flow>
  );
};
