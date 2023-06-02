import React, { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail'
import Dataproduct from '../components/card/Datacard'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Dataproduct from '../components/card/Datacard'
const ProductView = (props) => {
    React.useEffect(() => {
    window.scrollTo(0,0)
  }, [product])
  const product = Dataproduct.getProductById(props.match.params.id)
  return (
    <Section>
    <ProductDetail product={product}/>
    </Section>
  )
}

export default ProductView