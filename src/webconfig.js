function env(){
  const baseUrl = {
      dev:'http://dndemo.escase.cn',
      prod:'http://dndemo.escase.cn'
      // dev:'http://bw2019demo.escase.cn',
      // prod:'http://bw2019demo.escase.cn'
  }
  if(process.env.NODE_ENV == 'development')return baseUrl.dev
  return baseUrl.dev
}

export default env()