# README #

### Technical stacks ###
- React native
- Expo
- Firebase
- Native Base Theme with custom design
- Redux
- Thunk
- Google Map
- Stipe payment integration
- Facebook singup/login

### Environement ###

- node version: `12.8.1`
- expo version: `34.0.1`
- react version: `16.8.3`
- react-native version: `https://github.com/expo/react-native/archive/sdk-34.0.0.tar.gz`

### Running with Expo ###

- Install expo cli.
```shell
  $ nvm use 12.8.1
  $ yarn global add expo-cli
  $ yarn install
  $ yarn start
```

### Publishing with `exp` command-line tool command: ###

```shell
$ exp publish

$ exp build:android
# or
$ exp build:ios
```

### Troubleshooting

* Clean cache 

Close the iPhone simulation
```shell
yarn cache clean && \
  watchman watch-del-all && \
  rm -rf node_modules && \
  rm -rf /tmp/metro-bundler-cache-* && \
  rm -rf /tmp/haste-map-react-native-packager-* && \
  rm -rf $TMPDIR/react-* && rm -rf /tmp/metro-bundler-cache-* && \
  rm -rf /tmp/haste-map-react-native-packager-* && \
  xcrun simctl erase all
```  