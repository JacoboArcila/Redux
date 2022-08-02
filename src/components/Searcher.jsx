import React from 'react';
import { Input } from 'antd';

const Searcher = () => {
  return (
    <div>
        <Input.Search placeholder='Buscar...' style={{marginBottom: 10}} />
    </div>
  )
}

export default Searcher