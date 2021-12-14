//* Http status messages can be configured here.
class HTTPStatusMessages {
    static Message = {
        502: {
            'tr': 'Dış sistem kaynaklı bir sorun meydana geldi',
            'en': 'An error occured from external system'
        },
        500: {
            'tr': 'Bir sorun var. İçeriği kontrol edip yönetcinize başvurun',
            'en': 'There is a problem. Check the content and contact your administrator'
        },
        429: {
            'tr': 'Art arda çok fazla istek atıldı',
            'en': 'Too many requests in a row'
        },
        422: {
            'tr': 'Veri kaydedilirken bir hata meydana geldi',
            'en': 'An error occurred while saving data'
        },
        410: {
            'tr': 'Gitti',
            'en': 'Gone'
        },
        409: {
            'tr': 'Bu kayıt daha önce gönderilmiş',
            'en': 'This record has already been sent'
        },
        406: {
            'tr': 'Beklenen alanlar sağlanamadı',
            'en': 'The expected fields could not be provided'
        },
        404: {
            'tr': 'Bu url geçerli değil',
            'en': 'This url is not exists'
        },
        403: {
            'tr': 'Erişim engeli. Sisteme giriş yaptığınızdan emin olun',
            'en': 'Access denied. Make sure you are logged into the system'
        },
        401: {
            'tr': 'Hatalı bilgiler gönderildi',
            'en': 'Invalid credentials send'
        },
        400: {
            'tr': 'Hatalı istek',
            'en': 'Bad request'
        },
        204: {
            'tr': 'İçerik yok',
            'en': 'No content'
        },
        202: {
            'tr': 'Kabul Edildi',
            'en': 'Accepted'
        },
        201: {
            'tr': 'CRUD Başarılı',
            'en': 'CRUD Success'
        },
        200: {
            'tr': 'Başarılı',
            'en': 'Success'
        },
    }
}

export default HTTPStatusMessages;