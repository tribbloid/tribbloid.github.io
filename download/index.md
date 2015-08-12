---
title: Download
layout: download
meta_description: A scalable query engine for web scraping, data mashup, and acceptance QA. Certified for Apache Spark.
meta_keywords: download, Tribbloid, Spooky Stuff, Apache Spark, web scraper, data mining
summary: Download Spooky Stuff, a scalable query engine for web scraping, data mashup, and acceptance QA
---

# Download Latest:

<div class="table" markdown="1">

|  | Stable ({{site.STABLE_VERSION}}) | Nightly ({{site.NIGHTLY_VERSION}}) |
| ------------- | ------------------------ | -------------- |
| Library | [Download .jar](https://s3-us-west-1.amazonaws.com/spooky-bin/spookystuff-assembly-{{site.STABLE_VERSION}}.jar) | [Download .jar](https://s3-us-west-1.amazonaws.com/spooky-bin/spookystuff-assembly-{{site.NIGHTLY_VERSION}}.jar) |
| Bundled with Spark {{site.SPARK_VERSION0}} | [Download .zip](https://s3-us-west-1.amazonaws.com/spooky-bin/spookystuff-assembly-{{site.STABLE_VERSION}}-bin-spark{{site.SPARK_VERSION0}}.zip) | [Download .zip](https://s3-us-west-1.amazonaws.com/spooky-bin/spookystuff-assembly-{{site.NIGHTLY_VERSION}}-bin-spark{{site.SPARK_VERSION0}}.zip) |
| Bundled with Spark {{site.SPARK_VERSION1}} | [Download .zip](https://s3-us-west-1.amazonaws.com/spooky-bin/spookystuff-assembly-{{site.STABLE_VERSION}}-bin-spark{{site.SPARK_VERSION1}}.zip) | [Download .zip](https://s3-us-west-1.amazonaws.com/spooky-bin/spookystuff-assembly-{{site.NIGHTLY_VERSION}}-bin-spark{{site.SPARK_VERSION1}}.zip) |

</div>

# [Download Previous Versions](http://tribbloid.github.io/spookystuff/deploying.html#previous-versions)

# Dependency Tabs (is it hard?)

<div class="codetabs">

<div data-lang="Maven">

{% highlight xml %}
<dependency>
    <groupId>org.tribbloid.spookystuff</groupId>
    <artifactId>spookystuff-core_2.10</artifactId>
    <version>{{site.STABLE_VERSION}}</version>
</dependency>
{% endhighlight %}

</div>

<div data-lang="SBT">

{% highlight scala %}
libraryDependencies += "org.tribbloid.spookystuff" % "spookystuff-core_2.10" % "{{site.STABLE_VERSION}}"
{% endhighlight %}

</div>

<div data-lang="Gradle">

{% highlight groovy %}
'org.tribbloid.spookystuff:spookystuff-core_2.10:{{site.STABLE_VERSION}}'
{% endhighlight %}

</div>

<div data-lang="Leiningen">

{% highlight clojure %}
[org.tribbloid.spookystuff/spookystuff-core_2.10 "{{site.STABLE_VERSION}}"]
{% endhighlight %}

</div>

</div>

### Source Code

Checkout from [GitHub Repository](https://github.com/tribbloid/spookystuff):

{% highlight bash %}
git checkout https://github.com/tribbloid/spookystuff
{% endhighlight %}

OR Download Source Code package:

<div class="table" markdown="1">

| Stable ({{site.STABLE_VERSION}}) | Nightly ({{site.NIGHTLY_VERSION}}) |
| ------------ | ----------- |
| [Download .zip](https://github.com/tribbloid/spookystuff/zipball/release-{{site.STABLE_VERSION}}) | [Download .zip](https://github.com/tribbloid/spookystuff/zipball/master) |
| [Download .tar.gz](https://github.com/tribbloid/spookystuff/tarball/release-{{site.STABLE_VERSION}}) | [Download .tar.gz](https://github.com/tribbloid/spookystuff/tarball/master) |

</div>
