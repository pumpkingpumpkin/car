import Mock from 'mockjs'

Mock.mock('/api/goodlist','get',{
    status:200,
    message:'获取用户列表成功！',
    'data|5-10|':[{
        'id|+1': 0,
        name:'@cword(2,8)',
        code:'@natural(1000,1000000)',
        roles:'@cword(2,8)'
    }]
})

Mock.mock('/api/addUsers','post',function (option) {
    console.log(option)
    return Mock.mock ({
        status:200,
        message:'@cword(2,5)'
    })
})


