# 08 — Güvenlik, Çerez Onayı & Testler

## Çerez Onayı & Analitik
- İlk ziyarette altta **çerez onay bannerı**: Kabul Et · Reddet · Ayarlar (+ Politika bağlantısı).
- **Varsayılan gizlilik dostu:** analitik/pazarlama çerezleri onaya kadar **yüklenmez**; zorunlu (işlevsel) çerezler her zaman çalışır.
- Analytics script'i (ör. GA) **yalnızca onaydan sonra** yüklenir.
- Seçim `localStorage`/çerezde saklanır; belirli süre tekrar sorulmaz.
- Banner klavye erişilebilir, doğru focus yönetimi.
- **KVKK / GDPR:** hangi veri, hangi amaçla toplandığı açıkça belirtilir; gereksiz veri toplanmaz.

## Frontend Güvenlik
- Dış bağlantılarda `rel="noopener noreferrer"`.
- Form girdilerini doğru doğrula (form eklenirse).
- Kullanıcı girdisini kontrolsüz HTML olarak basma (XSS'ten kaçın).
- `npm audit` vb. ile bağımlılık/açık kontrolü.
- Dağıtım ortamı güvenlik başlıkları incelenir.
- **Gizli anahtar (API key vb.) frontend koduna ASLA yazılmaz.**
- Backend eklenirse yetkilendirme/kimlik doğrulama/sunucu doğrulaması ayrıca ele alınır.

## Kalite & Güvenlik Testleri
| # | Konu | Öncelik |
|---|------|---------|
| 1 | TR/EN metin doğruluğu | Yüksek |
| 2 | Mobil/tablet/masaüstü görünüm | Yüksek |
| 3 | Header & mobil menü işlevleri | Yüksek |
| 4 | Seans kartı & modal davranışı | Yüksek |
| 5 | Klavye gezinme & odak görünürlüğü | Yüksek |
| 6 | Reduced motion | Yüksek |
| 7 | Dış bağlantı güvenliği | Yüksek |
| 8 | Form doğrulama (form varsa) | Yüksek |
| 9 | Bozuk/eksik görsel | Orta |
| 10 | Sayfa performansı | Yüksek |
| 11 | Başlık hiyerarşisi & a11y | Yüksek |
| 12 | Üretim güvenlik başlıkları | Dağıtım |
| 13 | Menü/modal/dil otomatik testleri | Yüksek |
| 14 | JS hatasız çalışma | Yüksek |

> ⚠️ Yalnızca frontend olan projede backend güvenliği test edilmiş sayılmaz.
