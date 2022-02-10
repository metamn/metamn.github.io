# more-themes-baby-static

- Homepage of morethemes.baby (Static version)
- During generation some info is lost
- Deployed to http://metamn.io/morethemesbaby/

## Notes

- Changing urls is not straightforward with VSCode
- Some sub-subfolders still preserve the old url
- Solution:

```sh
find . -type f -name '*.html' -print0 | xargs -0 sed -i 's#https://morethemes.baby#http://metamn.io/morethemesbaby#g'

find . -type f -name '*.css' -print0 | xargs -0 sed -i 's#https://morethemes.baby#http://metamn.io/morethemesbaby#g'

## verify
grep -rnw src/ -e 'https://morethemes.baby'
```
